from datetime import datetime
from sqlalchemy import Boolean,DateTime,Float,ForeignKey,Integer,String,Text,UniqueConstraint
from sqlalchemy.orm import Mapped,mapped_column,relationship
from .database import Base

class User(Base):
    __tablename__='users'
    id:Mapped[int]=mapped_column(primary_key=True)
    name:Mapped[str]=mapped_column(String(120))
    email:Mapped[str]=mapped_column(String(180),unique=True,index=True)
    phone:Mapped[str|None]=mapped_column(String(30),unique=True)
    password_hash:Mapped[str]=mapped_column(String(255))
    role:Mapped[str]=mapped_column(String(20),default='client')
    created_at:Mapped[datetime]=mapped_column(DateTime,default=datetime.utcnow)

class Coach(Base):
    __tablename__='coaches'
    id:Mapped[int]=mapped_column(primary_key=True)
    user_id:Mapped[int|None]=mapped_column(ForeignKey('users.id'),unique=True)
    slug:Mapped[str]=mapped_column(String(80),unique=True,index=True)
    name:Mapped[str]=mapped_column(String(120))
    name_ar:Mapped[str]=mapped_column(String(120))
    specialty:Mapped[str]=mapped_column(String(160))
    specialty_ar:Mapped[str]=mapped_column(String(160))
    city:Mapped[str]=mapped_column(String(80),default='Riyadh')
    district:Mapped[str]=mapped_column(String(80))
    price:Mapped[int]=mapped_column(Integer)
    verified:Mapped[bool]=mapped_column(Boolean,default=False)
    home:Mapped[bool]=mapped_column(Boolean,default=True)
    gym:Mapped[bool]=mapped_column(Boolean,default=True)
    outdoor:Mapped[bool]=mapped_column(Boolean,default=True)
    online:Mapped[bool]=mapped_column(Boolean,default=True)
    rating:Mapped[float]=mapped_column(Float,default=0)
    review_count:Mapped[int]=mapped_column(Integer,default=0)

class Booking(Base):
    __tablename__='bookings'
    id:Mapped[int]=mapped_column(primary_key=True)
    client_id:Mapped[int]=mapped_column(ForeignKey('users.id'))
    coach_id:Mapped[int]=mapped_column(ForeignKey('coaches.id'))
    mode:Mapped[str]=mapped_column(String(20))
    scheduled_at:Mapped[datetime]=mapped_column(DateTime)
    city:Mapped[str|None]=mapped_column(String(80))
    district:Mapped[str|None]=mapped_column(String(80))
    address:Mapped[str|None]=mapped_column(Text)
    status:Mapped[str]=mapped_column(String(20),default='pending')
    total_sar:Mapped[int]=mapped_column(Integer)
    created_at:Mapped[datetime]=mapped_column(DateTime,default=datetime.utcnow)

class Review(Base):
    __tablename__='reviews';__table_args__=(UniqueConstraint('booking_id'),)
    id:Mapped[int]=mapped_column(primary_key=True)
    booking_id:Mapped[int]=mapped_column(ForeignKey('bookings.id'))
    client_id:Mapped[int]=mapped_column(ForeignKey('users.id'))
    coach_id:Mapped[int]=mapped_column(ForeignKey('coaches.id'))
    rating:Mapped[int]=mapped_column(Integer)
    comment:Mapped[str]=mapped_column(Text)
    created_at:Mapped[datetime]=mapped_column(DateTime,default=datetime.utcnow)
