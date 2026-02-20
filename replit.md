# Bloxr.dev

## Overview
AI-powered Roblox development platform landing page. A React + Vite + Tailwind CSS frontend-only application.

## Project Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4 with `@tailwindcss/vite` plugin
- **Animation**: Motion (Framer Motion successor)
- **Font**: General Sans via Fontshare

## Project Structure
```
/
├── index.html          # HTML entry point
├── src/
│   ├── main.tsx        # React entry point
│   ├── App.tsx         # Root component
│   ├── index.css       # Global styles with Tailwind
│   └── components/
│       └── Hero.tsx    # Landing page hero section with navbar
├── vite.config.ts      # Vite configuration (port 5000, all hosts allowed)
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Running
- Dev server: `npm run dev` (runs on port 5000)
- Build: `npm run build` (outputs to `dist/`)

## Deployment
- Static deployment serving the `dist/` directory
