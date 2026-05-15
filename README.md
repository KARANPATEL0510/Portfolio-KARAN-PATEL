# 🌌 KARAN PATEL - Cybersecurity Developer Portfolio

An ultra-premium, futuristic developer portfolio website combining Apple-level polish, Cyberpunk aesthetics, Tesla-style smoothness, and modern developer branding.

## ✨ Features

### 🖱️ Advanced Cursor System
- Custom animated glowing neon orb cursor
- Gradient colors (cyan → purple)
- Smooth spring-based easing
- Dynamic scaling on interactive elements
- Trail particles with motion blur
- Hover interactions with contextual labels

### 🎬 Premium Experience
- **Cinematic Loader**: Terminal-style intro with typing animation and progress indicator
- **Glassmorphism UI**: Frosted glass effects with blur and transparency
- **Smooth Scrolling**: Lenis-powered smooth scroll with physics
- **Responsive Design**: Fully mobile-optimized with touch support
- **Dark Theme**: Deep space-black backgrounds with neon accents

### 🌠 Background Effects
- Floating animated gradient orbs
- Particle network with connecting lines
- Mouse-reactive lighting effects
- Animated mesh gradients
- Parallax scrolling
- Noise texture overlay

### 🧭 Navigation
- Glassmorphism navbar with blur effect
- Sticky positioning
- Animated active section indicator
- Mobile hamburger menu with smooth animations
- Desktop and mobile optimizations

### 🚀 Hero Section
- Large animated "KARAN PATEL" title
- Typing text animation (rotating phrases)
- Magnetic hover effects on buttons
- Neon glow borders
- Floating futuristic UI elements
- Scroll indicator with bounce animation

### 👨‍💻 About Section
- Animated profile introduction
- Tech stack bubbles with floating animation
- Mouse-reactive hover effects
- Glassmorphism cards
- Animated counters

### 💼 Projects Section
- 3D card grid with tilt effect
- Rotating neon border glow
- Project category badges
- Tech stack displays
- GitHub and live demo buttons
- Spotlight hover effects

### ⚡ Skills Section
- Animated progress bars
- Skill category cards
- Circular percentage displays
- Competency pills
- Smooth reveal animations

### 🛡️ Experience Section
- Animated vertical timeline
- Color-coded timeline dots
- Experience and education mix
- Hover animations
- Glowing connectors

### 📩 Contact Section
- Fully functional contact form
- Real-time validation
- Copy email functionality
- Social media links
- Contact information cards
- Animated form inputs

### 🦾 Microinteractions
- Magnetic buttons
- Elastic hover transitions
- Glow animations
- Smooth reveal effects
- Page transition animations
- Neon rotating borders

## 🛠 Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **GSAP** - Complex motion sequences
- **Lenis** - Smooth scrolling library

### Icons & UI
- **Lucide React** - Icon library
- **React Icons** - Additional icons
- **React Intersection Observer** - Scroll animations

### Optional
- **Three.js** - 3D graphics (if used)

## 📁 Project Structure

```
src/
├── components/
│   ├── Loader.jsx          # Cinematic page loader
│   ├── Navbar.jsx          # Navigation bar
│   └── Footer.jsx          # Footer component
├── sections/
│   ├── Hero.jsx            # Hero section
│   ├── About.jsx           # About section with tech bubbles
│   ├── Projects.jsx        # Projects showcase
│   ├── Skills.jsx          # Skills display
│   ├── Experience.jsx      # Timeline experience
│   └── Contact.jsx         # Contact form & info
├── hooks/
│   ├── useCustomCursor.js  # Custom cursor logic
│   ├── useSmoothScroll.js  # Smooth scroll hook
│   └── index.js            # Export hooks
├── animations/
│   ├── gsapAnimations.js   # GSAP animation utilities
│   ├── framerMotionVariants.js  # Framer Motion presets
│   └── index.js            # Export animations
├── utils/
│   └── helpers.js          # Helper functions
├── App.jsx                 # Main app component
├── main.jsx                # React entry point
└── index.css              # Global styles

public/
├── index.html             # HTML template
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL shown in terminal (typically `http://localhost:3000`)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
- `cyber-cyan`: `#00d4ff`
- `cyber-purple`: `#a855f7`
- `cyber-magenta`: `#ff00ff`
- `cyber-pink`: `#ff006e`

### Animations
- Framer Motion variants are in `src/animations/framerMotionVariants.js`
- GSAP animations are in `src/animations/gsapAnimations.js`
- Tailwind animations are in `tailwind.config.js`

### Content
Update content in respective section files:
- Portfolio info in `src/sections/Hero.jsx`
- About bio in `src/sections/About.jsx`
- Projects in `src/sections/Projects.jsx`
- Skills in `src/sections/Skills.jsx`
- Experience in `src/sections/Experience.jsx`
- Contact in `src/sections/Contact.jsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md)
- Desktop: > 1024px (lg)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus-visible states
- Alt text ready for images

## 🎯 Performance

- Lazy-loaded sections with Intersection Observer
- Optimized animations with GPU acceleration
- Minimal re-renders with React best practices
- Smooth 60fps animations
- Optimized bundle size

## 📊 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔗 Links

- **GitHub**: https://github.com/KARANPATEL0510
- **Email**: pkaran0510@gmail.com
- **Location**: Mumbai, India
- **Phone**: +91 8591236772

## 📄 License

© 2024 Karan Patel. All rights reserved.

## 🙏 Credits

Built with:
- React & Vite
- Framer Motion
- GSAP
- Tailwind CSS
- And ❤️

---

**Status**: ✅ Production Ready | **Version**: 1.0.0 | **Last Updated**: May 10, 2024
