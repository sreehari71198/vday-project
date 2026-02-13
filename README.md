# For Jojo ❤️

Production-grade romantic WebApp built with Next.js (App Router) and an Express backend. This project is modular, config-driven, and designed for easy updates later.

## ✨ Project Overview

**Frontend:** Next.js + TypeScript + TailwindCSS + Framer Motion + Zustand

**Backend:** Node.js + Express with controller/service architecture

**Modules:**
- Proposal Module
- Games Module
- LifeStory Module

## 📁 Folder Structure

```
.
├── frontend/                 # Next.js app
│   ├── src/
│   │   ├── app/               # App Router pages
│   │   ├── components/        # Reusable UI and layout components
│   │   ├── config/            # Copy and configuration
│   │   ├── data/              # JSON-driven content
│   │   ├── lib/               # Types + helpers
│   │   └── store/             # Zustand state
│   └── public/                # Media assets
├── backend/                   # Express API
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── config/
│   │   └── server.js
├── .env.example
├── .gitignore
└── README.md
```

## 🚀 Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🚀 Running the Backend

```bash
cd backend
npm install
npm run dev
```

## 🧠 Deployment

### Frontend (Vercel)
1. Push repo to GitHub.
2. Import `frontend/` into Vercel as the root directory.
3. Set environment variables from `.env.example`.
4. Build command: `npm run build`
5. Output: `.next`

### Backend (Render / Railway)
1. Create a new web service from `backend/`.
2. Build command: `npm install`
3. Start command: `npm run start`
4. Add environment variables from `.env.example`.

## 🎞 Replacing Placeholder Media
- Add media inside `frontend/public/`
- Update the relevant config files:
  - `src/data/proposalScenes.ts`
  - `src/data/timeline.ts`

## 🎮 Adding New Games
1. Create a new component in `frontend/src/components/games/`
2. Add a new tile in `src/data/games.ts`
3. Add the component to `src/app/games/page.tsx`

## ❓ Editing Questions
Update the questions in:
`frontend/src/data/questions.ts`

Current placeholder answers:
- Q1: College
- Q2: Mandhi
- Q3: Ponnu

## 🗺 Updating the Timeline
Update the timeline data in:
`frontend/src/data/timeline.ts`

## ✅ Production Build Steps

```bash
cd frontend
npm run build
npm run start
```

```bash
cd backend
npm run start
```

## 🧰 Git Init Instructions

```bash
git init
git add .
git commit -m "Initial romantic release"
```

---

Made with ❤️ for a magical experience.