# Private Coach V4 — Full-Stack Hybrid Coaching Marketplace

Production-oriented stack: Next.js frontend, FastAPI backend, PostgreSQL, JWT authentication, bookings and verified reviews. Deploy to Vercel + Neon or run all services locally with Docker Compose.

V3 adds a real bilingual Arabic/English journey for clients and coaches: registration, at-home/gym/outdoor/online session selection, location and time capture, coach marketplace profiles, verified reviews, and a coach operations portal.

Premium sports-tech MVP for **Human + AI personal coaching**.

## Product promise
**Your Coach. Your Way.**

Private Coach lets a user:
- discover verified local coaches
- filter by sport / goal / location
- view professional coach profiles
- select a time and reserve a session
- use an AI coach that understands human-coach sessions
- track adherence, training load and progress

## Included screens
- `/` — Premium landing/dashboard hybrid
- `/coaches` — Search + filter marketplace
- `/coaches/[id]` — Coach profile and booking flow
- `/ai-coach` — Adaptive AI coach experience
- `/progress` — Progress analytics dashboard

## Stack
- Next.js App Router
- React
- TypeScript
- lucide-react
- Custom responsive CSS design system

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Design direction
- Premium Saudi/global sports-tech brand
- Dark graphite canvas
- Electric-lime action accent
- Warm ivory secondary surfaces
- Editorial typography with oversized headlines
- No generic gym-template aesthetic
- Mobile-first booking actions

## V1 implementation notes
This is a front-end product prototype with local/mock data. Booking, AI replies, filters and time selection demonstrate UX behavior but are not connected to production APIs.

## Recommended Codex continuation
1. Add authentication (user / coach / admin roles)
2. PostgreSQL + Prisma data model
3. Coach onboarding and verification
4. Real availability calendar and booking engine
5. Payments and cancellation rules
6. Location / service radius support
7. AI coaching API + user memory
8. Human coach session notes -> AI plan adjustment
9. Coach dashboard
10. Admin / operations dashboard
11. Arabic RTL + English LTR
12. Saudi privacy, consent and marketplace policy review

## Core entities
User, Coach, CoachCredential, Sport, Specialty, AvailabilitySlot, Booking, Payment, TrainingPlan, Workout, WorkoutLog, CoachNote, Goal, ProgressMetric, AIConversation, Review.

## Brand
**PRIVATE COACH**
Your Coach. Your Way.
