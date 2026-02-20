# Bloxr.dev

## Overview
AI-powered Roblox development platform landing page with waitlist email collection. A React + Vite + Tailwind CSS application with custom animations, PRD-accurate content, and a PostgreSQL-backed waitlist.

## Project Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4 with `@tailwindcss/vite` plugin
- **Animation**: Motion (Framer Motion successor) for scroll-triggered and entrance animations
- **Routing**: React Router DOM v7 (SPA routing)
- **Database**: PostgreSQL (Neon-backed) for waitlist emails
- **API**: Vite plugin-based API endpoint (`/api/waitlist`) for dev; needs Express server for production
- **Font**: General Sans via Fontshare
- **Icons**: Custom inline SVGs (no emoji usage)

## Project Structure
```
/
├── index.html          # HTML entry point
├── src/
│   ├── main.tsx        # React entry point
│   ├── App.tsx         # Root component with React Router (/ and /waitlist routes)
│   ├── index.css       # Global styles, Tailwind, custom animations
│   └── components/
│       ├── Hero.tsx        # Landing hero with typing prompt animation, video bg
│       ├── Problem.tsx     # Competitor comparison (why existing tools fail)
│       ├── HowItWorks.tsx  # 4-step connection flow with timeline
│       ├── Features.tsx    # 6 feature cards with SVG icons, sticky layout
│       ├── Marketplace.tsx # UI component categories with hover effects
│       ├── Pricing.tsx     # 3 tiers (Free $0/Pro $14/Studio $39)
│       ├── Navbar.tsx      # Shared navigation bar component
│       ├── CTA.tsx         # Final call-to-action
│       ├── Waitlist.tsx    # Email waitlist signup page (/waitlist route)
│       └── Footer.tsx      # Site footer with nav links
├── vite.config.ts      # Vite config (port 5000, all hosts, waitlist API plugin)
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Database
- **Table: waitlist** - Stores email signups
  - `id` SERIAL PRIMARY KEY
  - `email` VARCHAR(255) NOT NULL UNIQUE
  - `created_at` TIMESTAMP DEFAULT NOW()

## Running
- Dev server: `npm run dev` (runs on port 5000)
- Build: `npm run build` (outputs to `dist/`)

## Design Decisions
- No emojis anywhere in the UI
- All icons are custom inline SVGs
- PRD-accurate pricing: Free ($0, 10 prompts/day), Pro ($14/mo unlimited, most popular), Studio ($39/mo teams)
- PRD-accurate marketplace categories: Shop & Economy, Player Info, Notifications, Navigation
- Custom CSS animations: float, pulse-glow, gradient-shift, grid background, noise overlay
- Typing prompt animation in hero cycles through real PRD example prompts
- Navbar transitions to glass effect on scroll
- Vite watcher excludes .local/ and .cache/ to prevent reload loops
- "Get Early Access" and "Join Waitlist" buttons link to /waitlist page
- Waitlist page shows success confirmation after email submission

## Deployment
- Requires backend server for production (Vite plugin API only works in dev mode)
- For production: needs Express server to handle /api/waitlist + serve static dist/
