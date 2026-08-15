# نشر Private Coach: Vercel + Neon

## البنية
- Vercel Frontend من جذر المشروع.
- Vercel FastAPI مع Root Directory = `backend`.
- Neon Free PostgreSQL كقاعدة دائمة.

## Neon
أنشئ مشروع `privatecoach` وانسخ Pooled connection string. غيّر `postgresql://` إلى `postgresql+psycopg://` واترك `sslmode=require`.

## Backend على Vercel
أنشئ مشروعًا من المستودع واجعل Root Directory هو `backend` ثم أضف:
```env
DATABASE_URL=postgresql+psycopg://USER:PASSWORD@HOST/DATABASE?sslmode=require
JWT_SECRET=LONG_RANDOM_SECRET
CORS_ORIGINS=https://FRONTEND_DOMAIN.vercel.app
```
افحص `https://BACKEND_DOMAIN.vercel.app/api/health` و`/docs`.

## Frontend على Vercel
أنشئ مشروعًا ثانيًا من جذر المستودع وأضف:
```env
NEXT_PUBLIC_API_URL=https://BACKEND_DOMAIN.vercel.app/api
```
ثم أعد النشر.

## التحقق
1. `/api/health` يعرض `database: connected`.
2. أنشئ حسابًا من `/login`.
3. افتح `/coaches` وتأكد أن الحالة Live.
4. اختبر حجزًا حضوريًا بعنوان وحجزًا Online.
5. التقييم لا يُقبل إلا بعد اكتمال حجز موثّق.

## Docker محليًا
`cp .env.example .env && docker compose up --build`

- Frontend: http://localhost:3000
- Backend docs: http://localhost:8000/docs
