# Lejie Liu - Personal Portfolio Website

A modern, interactive personal portfolio website built with React, TypeScript, Three.js, and Tailwind CSS. Features stunning 3D WebGL effects and smooth animations.

## 🎨 Features

- **3D Interactive Background**: Particle system with mouse interaction using Three.js
- **Responsive Design**: Mobile-first approach with seamless experience across devices
- **Smooth Animations**: GPU-accelerated animations powered by Framer Motion
- **Glassmorphism UI**: Modern card designs with backdrop blur effects
- **Performance Optimized**: Lazy loading, code splitting, and optimized 3D rendering
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Color Scheme

- **Primary (#2EC4B6)**: Main CTAs, links, section titles
- **Secondary (#FF9F1C)**: Highlights, hover states
- **Accent (#FFBF69)**: Secondary highlights, decorative elements
- **Surface (#CBF3F0)**: Card backgrounds
- **Background (#FFFFFF)**: Main background

## 📂 Project Structure

```
personal_website/
├── src/
│   ├── components/
│   │   ├── Hero/              # Landing section with 3D background
│   │   ├── About/             # About me and skills
│   │   ├── Experience/        # Professional experience
│   │   ├── Projects/          # Featured projects
│   │   └── Footer/            # Footer with contact info
│   ├── data/                  # JSON-like data files
│   ├── types/                 # TypeScript type definitions
│   └── App.tsx                # Main application component
├── public/                    # Static assets
└── index.html                 # HTML entry point
```

## 🛠 Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **3D Graphics**: Three.js, React Three Fiber
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint

## 📝 Customization

### Update Personal Information

Edit `src/data/skills.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',
  email: 'your.email@example.com',
  title: 'Your Title',
  tagline: 'Your tagline',
};
```

### Update Experience

Edit `src/data/experiences.ts` to add or modify professional experiences.

### Update Projects

Edit `src/data/projects.ts` to showcase your projects.

### Update Skills

Edit `src/data/skills.ts` to modify your technical skills.

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

Add to `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/personal-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Install gh-pages and deploy:

```bash
npm install --save-dev gh-pages
npm run deploy
```

## 🔧 Performance Optimization

- 3D particle count automatically adjusts based on device capabilities
- Images are lazy-loaded
- Components are code-split
- CSS is purged in production
- Animations use GPU acceleration

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 💬 Contact

Lejie Liu - lejie.liu.gr@dartmouth.edu

---

Built with ❤️ using React, TypeScript, and Three.js

