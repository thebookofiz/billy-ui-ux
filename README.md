# Intuition — Onboarding Flow Prototype

A mobile-first UI/UX prototype for the Intuition onboarding experience. Built with a brutalist, protocol-inspired design language — bold uppercase typography, thick borders, no border radius, and a tech-forward aesthetic.

## Stack

- **React 19** + **TypeScript**
- **Vite 7** (dev server + build)
- **Tailwind CSS v4** (styling via `@tailwindcss/vite`)
- **React Router v7** (client-side routing)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The app is designed for **mobile viewports** (430px max-width) — use your browser's device toolbar or resize the window to see it as intended.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Screen Flow

The prototype walks through a complete onboarding journey, then drops the user into a social feed.

```
Welcome → Value Props → Intent → Choose Domains → Personalizing Signal (auto)
→ Choose Topic → Add Favorites → Collection Created → Feed View → World Top
→ Social Perspective → Curate Council → Circle Results → Onboarding Complete
→ Social Feed → Stack Detail → Signal Detail
```

## Design Language

- **White app background** framed by a black canvas body (simulates a mobile device)
- **Inter** (headings/body) + **JetBrains Mono** (labels/data)
- Accent colors: Blue `#3B5BFF`, Neon Green `#39FF14`, Orange `#FF6B00`
- Brutalist cards with 2.5px black borders, no border radius
- Protocol/tech vocabulary: phases, signals, trust, staking, pipelines

## Project Structure

```
src/
├── components/       # Reusable UI (Button, Card, ProgressBar, SignalWave)
├── layouts/          # OnboardingLayout wrapper
├── screens/          # All screen components
├── App.tsx           # Router configuration
├── index.css         # Tailwind theme + global styles
└── main.tsx          # Entry point
```
