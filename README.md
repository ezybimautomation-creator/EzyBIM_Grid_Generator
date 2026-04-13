# EzyBIM Website

Official marketing website for **EzyBIM** — BIM Automation Specialist.

We develop and sell precision BIM automation tools for Revit, and also create custom tools tailored to client requirements.

## Tech Stack

- **React 19** + TypeScript
- **Vite 6** (build tool)
- **TailwindCSS 4** (styling)
- **Motion** (animations)
- **React Router** (routing)
- **Lucide React** (icons)

## Getting Started

### Prerequisites
- Node.js 18+

### Install & Run

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/         # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProductSection.tsx
│   ├── BentoGrid.tsx
│   ├── ProcessSection.tsx
│   ├── CTASection.tsx
│   ├── ProductPage.tsx
│   └── Footer.tsx
├── constants/
│   └── products.ts     # Product data
├── App.tsx             # Root component with routing
├── index.css           # Global styles & Tailwind theme
└── main.tsx            # Entry point

public/
├── logo-full.png       # Full horizontal logo (icon + text)
├── logo-compact.png    # Compact horizontal logo
├── logo-icon.png       # Icon-only mark (favicon)
└── logo-text.png       # Text-only wordmark
```

## Logo Assets

| File | Description | Usage |
|------|-------------|-------|
| `logo-full.png` | Icon + "EzyBIM" text (wide) | Navbar |
| `logo-compact.png` | Icon + text (tight) | Footer, small headers |
| `logo-icon.png` | "E" icon mark only | Favicon, app icons |
| `logo-text.png` | "EzyBIM" text only | Alternative text contexts |
