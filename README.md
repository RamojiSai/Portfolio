# Ramoji Saikiran - Professional Portfolio

A production-grade, responsive portfolio web application for a Python Backend Developer & GenAI Engineer. Built with React, Tailwind CSS, and modern web standards.

## 🎯 Features

- ✨ **Responsive Design** - Mobile-first, works flawlessly on all devices
- 🎨 **Modern UI** - Clean, professional design with subtle animations
- ⚡ **Performance** - Optimized with Vite, lazy loading, and efficient rendering
- 📱 **Mobile-First** - Perfect on mobile, tablet, laptop, and desktop
- 🔄 **Data-Driven** - All content comes from structured data files (no hardcoded HTML)
- 🛠️ **Scalable Architecture** - Easy to add skills, projects, experience, and sections
- 🌙 **Dark Mode Ready** - Dark mode support built-in with Tailwind
- 📋 **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation

## 📋 Sections

1. **Hero** - Name, title, tagline, and CTAs
2. **About** - Professional summary and highlights
3. **Skills** - Categorized skills with proficiency levels
4. **Experience** - Work history with detailed achievements
5. **Projects** - Featured systems and projects by category
6. **Architecture** - Deep dive into system design and decisions
7. **Contact** - Email, location, social links

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn installed

### Installation

```bash
# Navigate to project directory
cd profile

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## 📁 Project Structure

```
profile/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   ├── Section.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── Grid.jsx
│   │   ├── TabGroup.jsx
│   │   ├── Container.jsx
│   │   └── index.js        # Central exports
│   ├── sections/            # Full page sections
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ArchitectureSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── index.js        # Central exports
│   ├── data/                # Content data (structured)
│   │   ├── skills.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   └── portfolio.js     # Metadata & personal info
│   ├── styles/
│   │   └── globals.css      # Global styles & animations
│   ├── App.jsx
│   └── main.jsx
├── public/                  # Static assets
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization Guide

### 1. Update Personal Information

Edit `src/data/portfolio.js`:

```javascript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    tagline: "Your professional tagline",
    bio: "Your bio",
    // ... other fields
  },
  // ... rest of portfolio data
};
```

### 2. Add New Skills

Edit `src/data/skills.js`:

```javascript
export const skillsData = {
  programmingLanguages: {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: "expert" },        // Add here
      { name: "JavaScript", level: "advanced" },
      // ... more skills
    ]
  },
  // ... other categories
};
```

**Skill Levels**: `expert`, `advanced`, `intermediate`

### 3. Add New Experience

Edit `src/data/experience.js`:

```javascript
export const experienceData = [
  {
    id: "exp-001",
    company: "Company Name",
    role: "Position Title",
    duration: "June 2023 – May 2025",
    location: "City, Country",
    type: "Full-time",
    description: "Brief role overview",
    highlights: [
      {
        title: "Achievement Title",
        description: "Detailed description of impact"
      },
      // ... more highlights
    ],
    technologies: ["Tech1", "Tech2", "Tech3"]
  },
  // ... more positions
];
```

### 4. Add New Projects

Edit `src/data/projects.js`:

```javascript
export const projectsData = [
  {
    id: "proj-001",
    title: "Project Title",
    featured: true,
    description: "Project description",
    category: "Backend",  // or MLOps, DevOps, etc.
    technologies: ["Tech1", "Tech2"],
    highlights: [
      "Key achievement 1",
      "Key achievement 2",
      // ... more highlights
    ],
    architecture: {
      frontend: "Technology",
      backend: "Technology",
      // ... more layers
    },
    keyMetrics: {
      throughput: "100K+/day",
      latency: "avg 120ms",
      // ... more metrics
    },
    links: {
      github: "https://github.com/...",
      demo: null,
      blog: null
    }
  },
  // ... more projects
];
```

### 5. Add New Section

1. Create new file in `src/sections/` (e.g., `BlogsSection.jsx`)
2. Build component using existing patterns
3. Import in `src/App.jsx`
4. Add to component tree

Example:

```jsx
import { BlogsSection } from './sections';

function App() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      {/* ... other sections */}
      <BlogsSection />  {/* Add new section */}
      <ContactSection />
    </div>
  );
}
```

### 6. Customize Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      accent: {
        blue: '#3b82f6',      // Change these
        purple: '#8b5cf6',
        cyan: '#06b6d4',
      }
    },
  },
}
```

### 7. Customize Fonts

Edit `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
  mono: ['Your Mono Font', 'monospace'],
}
```

## 🧩 Component API

### Button

```jsx
<Button 
  variant="primary"    // primary, secondary, outline, ghost
  size="md"            // sm, md, lg
  as="a"               // button (default) or a
  href="..."
>
  Click Me
</Button>
```

### Card

```jsx
<Card 
  hover={true}         // Enable hover effect
  bordered={false}     // Add border
  className="..."      // Custom classes
>
  Content here
</Card>
```

### Badge

```jsx
<Badge 
  variant="expert"     // expert, advanced, intermediate, primary, success, etc.
  size="md"            // sm, md, lg
>
  Label
</Badge>
```

### Grid

```jsx
<Grid cols={3} gap={6}>  {/* cols: 1, 2, 3, 4 */}
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```

### TabGroup

```jsx
<TabGroup 
  tabs={[
    { label: "Tab 1", content: <div>Content 1</div> },
    { label: "Tab 2", content: <div>Content 2</div> },
  ]}
  defaultTab={0}
/>
```

## 🎯 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Deploy to GitHub Pages

Update `vite.config.js`:

```javascript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

Then push to GitHub and enable Pages in repository settings.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components respect these breakpoints using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`).

## 🔍 SEO

- ✅ Semantic HTML
- ✅ Meta tags in `index.html`
- ✅ Open Graph support
- ✅ Mobile viewport
- ✅ Fast loading (Vite optimization)

Add Google Analytics by uncommenting in `index.html`.

## 🚀 Performance Tips

1. **Optimize Images**: Use WebP format, lazy load
2. **Code Splitting**: Vite handles this automatically
3. **Caching**: All assets are cached by browsers
4. **CDN**: Deploy with CDN for global distribution

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3001
```

**Build failing?**
```bash
rm -rf node_modules dist
npm install
npm run build
```

**Styles not applying?**
```bash
# Clear Tailwind cache
rm -rf .tailwindcss-cache
npm run dev
```

## 📝 License

This portfolio template is free to use and modify for personal use.

## 🤝 Support

For questions or issues, refer to:
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)

---

**Happy coding! 🚀**
