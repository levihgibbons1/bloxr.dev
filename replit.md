# Bloxr.dev

## Overview
AI-powered Roblox development platform landing page. A React + Vite + Tailwind CSS frontend-only application with custom animations and PRD-accurate content.

## Project Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4 with `@tailwindcss/vite` plugin
- **Animation**: Motion (Framer Motion successor) for scroll-triggered and entrance animations
- **Font**: General Sans via Fontshare
- **Icons**: Custom inline SVGs (no emoji usage)

## Project Structure
```
/
├── index.html          # HTML entry point
├── src/
│   ├── main.tsx        # React entry point
│   ├── App.tsx         # Root component (section ordering)
│   ├── index.css       # Global styles, Tailwind, custom animations
│   └── components/
│       ├── Hero.tsx        # Landing hero with typing prompt animation, video bg
│       ├── Problem.tsx     # Competitor comparison (why existing tools fail)
│       ├── HowItWorks.tsx  # 4-step connection flow with timeline
│       ├── Features.tsx    # 6 feature cards with SVG icons, sticky layout
│       ├── Marketplace.tsx # UI component categories with hover effects
│       ├── Pricing.tsx     # 3 tiers (Free/Pro $12/Studio $29)
│       ├── CTA.tsx         # Final call-to-action
│       └── Footer.tsx      # Site footer with nav links
├── vite.config.ts      # Vite config (port 5000, all hosts, excludes .local/.cache)
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Running
- Dev server: `npm run dev` (runs on port 5000)
- Build: `npm run build` (outputs to `dist/`)

## Design Decisions
- No emojis anywhere in the UI
- All icons are custom inline SVGs
- PRD-accurate pricing: Free (10 prompts/day), Pro ($12/mo unlimited), Studio ($29/mo teams)
- PRD-accurate marketplace categories: Shop & Economy, Player Info, Notifications, Navigation
- Custom CSS animations: float, pulse-glow, gradient-shift, grid background, noise overlay
- Typing prompt animation in hero cycles through real PRD example prompts
- Navbar transitions to glass effect on scroll
- Vite watcher excludes .local/ and .cache/ to prevent reload loops

## Deployment
- Static deployment serving the `dist/` directory
