# Lejie Liu Personal Website - Complete Implementation Guide

## Quick Start

```bash
# 1. Initialize project
npm create vite@latest . -- --template react-ts

# 2. Install dependencies
npm install three @react-three/fiber @react-three/drei framer-motion lucide-react

# 3. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Start development
npm run dev
```

## Project Structure

```
personal_website/
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── Hero3DBackground.tsx
│   │   │   └── HeroContent.tsx
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   └── SkillsSection.tsx
│   │   ├── Experience/
│   │   │   ├── ExperienceSection.tsx
│   │   │   └── ExperienceCard.tsx
│   │   ├── Projects/
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── ProjectCard.tsx
│   │   └── Footer/
│   │       └── Footer.tsx
│   ├── data/
│   │   ├── experiences.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Color Scheme Usage

- **Primary (#2EC4B6)**: Main CTAs, links, section titles
- **Secondary (#FF9F1C)**: Highlights, hover states, important tags
- **Accent (#FFBF69)**: Secondary highlights, decorative elements
- **Surface (#CBF3F0)**: Card backgrounds, sections
- **Background (#FFFFFF)**: Main background

## Features Implemented

✅ 3D WebGL particle background with mouse interaction
✅ Smooth scroll animations with Framer Motion
✅ Glassmorphism card designs
✅ Responsive mobile-first design
✅ Experience timeline with hover effects
✅ Project cards with 3D tilt effect
✅ Skills cloud with categorization
✅ Email copy functionality
✅ Optimized performance

## Development Notes

- The 3D background uses React Three Fiber with optimized particle count
- All animations are GPU-accelerated using Framer Motion
- Cards use backdrop-blur for glassmorphism effect
- Color scheme strictly follows the provided palette
- Mobile experience degrades 3D effects gracefully for performance

