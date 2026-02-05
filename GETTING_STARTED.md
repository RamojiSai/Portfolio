# 🚀 Getting Started with the Portfolio

## Step 1: Installation

```bash
# Navigate to project directory
cd profile

# Install dependencies
npm install

# Start the development server
npm run dev
```

Your portfolio will be live at: **http://localhost:3000**

---

## Step 2: Customize Your Portfolio

### Update Your Info (5 minutes)

Edit `src/data/portfolio.js`:
- Name
- Professional title
- Tagline
- Bio
- Contact info
- Social links

### Add Your Skills (5 minutes)

Edit `src/data/skills.js`:
- Add/remove skill categories
- Add skills with proficiency levels (expert, advanced, intermediate)

### Add Your Experience (10 minutes)

Edit `src/data/experience.js`:
- Add new job position
- Include company, role, duration
- Add achievements and technologies

### Add Your Projects (15 minutes)

Edit `src/data/projects.js`:
- Add project title and description
- Include technologies used
- Add key highlights and metrics
- Set featured status for main projects

---

## Step 3: Deploy

### Quick Option: Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Options: Netlify / GitHub Pages

See README.md for detailed deployment instructions.

---

## 📚 Component Guide

All UI is built from reusable components in `src/components/`:

- **Button** - Call-to-action buttons
- **Card** - Content containers
- **Badge** - Tags and labels
- **Grid** - Responsive layouts
- **TabGroup** - Tabbed content
- **Section** - Full-width sections
- **Container** - Max-width wrapper

---

## 🎨 Customization Quick Links

**Colors**: Edit `tailwind.config.js` → `theme.extend.colors`

**Typography**: Edit `tailwind.config.js` → `theme.extend.fontFamily`

**Spacing**: All spacing uses Tailwind defaults (4px base unit)

**Animations**: Edit `src/styles/globals.css` for custom animations

---

## ✅ Checklist Before Publishing

- [ ] Update name and contact info
- [ ] Add at least 3 projects
- [ ] Add experience and skills
- [ ] Update social links
- [ ] Add/resize profile image (optional)
- [ ] Test on mobile device
- [ ] Deploy to production

---

## 🆘 Need Help?

1. Check `README.md` for full documentation
2. Refer to `src/data/portfolio.js` for data structure examples
3. Review existing components in `src/components/`
4. Look at sections in `src/sections/` for usage patterns

---

**You're all set! Happy coding! 🎉**
