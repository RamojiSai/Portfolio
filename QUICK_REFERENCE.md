# Quick Reference Guide

## 🚀 Start Development

```bash
npm install
npm run dev
```

## 📝 Update Content

### Personal Info
Open: `src/data/portfolio.js`
- Name, title, tagline
- Bio, location, contact
- Social links

### Skills
Open: `src/data/skills.js`
- Add/remove categories
- Add skills with levels

### Experience  
Open: `src/data/experience.js`
- Add job positions
- Include achievements

### Projects
Open: `src/data/projects.js`
- Add featured projects
- Include tech stack

## 🎨 Customize Styling

**Colors**: `tailwind.config.js` → colors
**Fonts**: `tailwind.config.js` → fontFamily
**Spacing**: Use Tailwind scale (4px base)

## 📱 Responsive Classes

- `sm:` = 640px+
- `md:` = 768px+
- `lg:` = 1024px+
- `xl:` = 1280px+

Example: `text-lg md:text-2xl lg:text-4xl`

## 🧩 Component Usage

### Grid
```jsx
<Grid cols={3} gap={6}>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```

### Button
```jsx
<Button variant="primary" size="lg">
  Click Me
</Button>
```

### Badge
```jsx
<Badge variant="expert">Python</Badge>
```

## 🚀 Build & Deploy

```bash
npm run build
# Output: dist/
# Deploy dist/ folder anywhere
```

## 📚 Documentation

- `README.md` - Full documentation
- `GETTING_STARTED.md` - Quick start
- `ARCHITECTURE.md` - System design
- `EXTENSIONS.md` - Add new features

## 💡 Pro Tips

1. **Keep data separate** - Never hardcode content in JSX
2. **Reuse components** - Use existing Button, Card, Badge
3. **Mobile first** - Start mobile, add larger breakpoints
4. **Test responsive** - Check mobile, tablet, desktop
5. **Optimize images** - Use WebP, compress before uploading

## 🔗 Useful Links

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**Questions?** See full docs in README.md
