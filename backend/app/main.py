import os,time
from fastapi import FastAPI,Depends,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import func,select
from sqlalchemy.orm import Session
from .database import Base,engine,get_db,SessionLocal
from .models import User,Coach,Booking,Review
from .schemas import Register,Login,CoachOut,BookingCreate,ReviewCreate
from .security import hash_password,verify,token,current_user

app=FastAPI(title='Private Coach API',version='3.0.0')
app.add_middleware(CORSMiddleware,allow_origins=os.getenv('CORS_ORIGINS','http://localhost:3000').split(','),allow_credentials=True,allow_methods=['*'],allow_headers=['*'])
@app.on_event('startup')
def startup():
    for _ in range(20):
        try: Base.metadata.create_all(engine);break
        except Exception: time.sleep(2)
    db=SessionLocal()
    try:
        if not db.scalar(select(func.count(Coach.id))):
            db.add_all([Coach(slug='fahad',name='Fahad Alqahtani',name_ar='فهد القحطاني',specialty='Strength & Conditioning',specialty_ar='القوة واللياقة',district='Al Nakheel',price=210,verified=True,rating=4.9,review_count=128),Coach(slug='noura',name='Noura Alharbi',name_ar='نورة الحربي',specialty='Pilates & Mobility',specialty_ar='البيلاتس والحركة',district='Hittin',price=240,verified=True,rating=5,review_count=94),Coach(slug='omar',name='Omar Basalamah',name_ar='عمر باسلامة',specialty='Boxing Coach',specialty_ar='مدرب ملاكمة',district='Al Malqa',price=190,verified=True,rating=4.8,review_count=176)])
            db.commit()
    finally: db.close()
@app.get('/api/health')
def health(db:Session=Depends(get_db)): db.execute(select(1));return {'status':'healthy','database':'connected'}
@app.post('/api/auth/register')
def register(x:Register,db:Session=Depends(get_db)):
    if db.scalar(select(User).where(User.email==x.email)): raise HTTPException(409,'Email already registered')
    u=User(name=x.name,email=x.email,phone=x.phone,password_hash=hash_password(x.password),role=x.role);db.add(u);db.commit();db.refresh(u);return {'access_token':token(u),'user':{'id':u.id,'name':u.name,'role':u.role}}
@app.post('/api/auth/login')
def login(x:Login,db:Session=Depends(get_db)):
    u=db.scalar(select(User).where(User.email==x.email))
    if not u or not verify(x.password,u.password_hash): raise HTTPException(401,'Invalid credentials')
    return {'access_token':token(u),'user':{'id':u.id,'name':u.name,'role':u.role}}
@app.get('/api/coaches',response_model=list[CoachOut])
def coaches(mode:str|None=None,db:Session=Depends(get_db)):
    q=select(Coach)
    if mode in {'home','gym','outdoor','online'}: q=q.where(getattr(Coach,mode).is_(True))
    return list(db.scalars(q.order_by(Coach.rating.desc())))
@app.post('/api/bookings')
def book(x:BookingCreate,user:User=Depends(current_user),db:Session=Depends(get_db)):
    c=db.get(Coach,x.coach_id)
    if not c or x.mode not in {'home','gym','outdoor','online'} or not getattr(c,x.mode): raise HTTPException(400,'Invalid coach or mode')
    if x.mode!='online' and not x.address: raise HTTPException(422,'Address required for in-person sessions')
    b=Booking(client_id=user.id,coach_id=c.id,mode=x.mode,scheduled_at=x.scheduled_at,city=x.city,district=x.district,address=x.address,total_sar=c.price);db.add(b);db.commit();db.refresh(b);return {'id':b.id,'status':b.status,'total_sar':b.total_sar}
@app.get('/api/bookings/me')
def my_bookings(user:User=Depends(current_user),db:Session=Depends(get_db)): return list(db.scalars(select(Booking).where(Booking.client_id==user.id)))
@app.post('/api/reviews')
def review(x:ReviewCreate,user:User=Depends(current_user),db:Session=Depends(get_db)):
    b=db.get(Booking,x.booking_id)
    if not b or b.client_id!=user.id or b.status!='completed': raise HTTPException(403,'Only completed verified bookings can be reviewed')
    r=Review(booking_id=b.id,client_id=user.id,coach_id=b.coach_id,rating=x.rating,comment=x.comment);db.add(r);db.flush();avg,count=db.execute(select(func.avg(Review.rating),func.count(Review.id)).where(Review.coach_id==b.coach_id)).one();c=db.get(Coach,b.coach_id);c.rating=float(avg);c.review_count=count;db.commit();return {'status':'created'}
