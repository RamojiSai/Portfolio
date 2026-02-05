# Extension Guide - Adding New Features

This guide shows you how to add common features to your portfolio.

## 🎯 Common Extensions

### 1. Add a Blog Section

#### Step 1: Create Data File

Create `src/data/blog.js`:

```javascript
export const blogData = [
  {
    id: 'blog-001',
    title: 'Building LLM Evaluation Systems at Scale',
    slug: 'llm-evaluation-systems',
    excerpt: 'How we built a system to evaluate 100K models daily...',
    date: '2024-01-15',
    category: 'Backend',
    readTime: '8 min read',
    content: 'Full blog post content here...',
  },
  // ... more blog posts
];
```

#### Step 2: Create Section Component

Create `src/sections/BlogSection.jsx`:

```jsx
import { Section, SectionTitle, Container, Card, Grid, Badge } from '../components';
import { blogData } from '../data/blog';

export const BlogSection = () => {
  return (
    <Section id="blog">
      <Container>
        <SectionTitle 
          title="Blog" 
          subtitle="Insights on backend systems and AI engineering"
        />
        
        <Grid cols={2} gap={6}>
          {blogData.map((post) => (
            <Card key={post.id} hover={true}>
              <Badge variant="primary" size="sm" className="mb-3">
                {post.category}
              </Badge>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-dark-600 dark:text-dark-400 text-sm mb-4">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-dark-500">{post.date}</span>
                <span className="text-xs text-dark-600">{post.readTime}</span>
              </div>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default BlogSection;
```

#### Step 3: Add to App.jsx

```jsx
import { BlogSection } from './sections';

function App() {
  return (
    <>
      {/* ... other sections */}
      <BlogSection />
      {/* ... other sections */}
    </>
  );
}
```

---

### 2. Add Certificates/Certifications Section

#### Data File (`src/data/certifications.js`):

```javascript
export const certificationsData = [
  {
    id: 'cert-001',
    title: 'AWS Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    date: '2023-12-15',
    url: 'https://...',
  },
  // ... more certifications
];
```

#### Section Component (Similar pattern to blog):

```jsx
export const CertificationsSection = () => {
  return (
    <Section id="certifications">
      <Container>
        <SectionTitle title="Certifications" subtitle="Professional credentials" />
        <Grid cols={3} gap={4}>
          {certificationsData.map((cert) => (
            <Card key={cert.id}>
              <h4 className="font-bold mb-2">{cert.title}</h4>
              <p className="text-sm text-dark-600 mb-3">{cert.issuer}</p>
              <p className="text-xs text-dark-500">{cert.date}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
```

---

### 3. Add Testimonials/Recommendations

#### Data File (`src/data/testimonials.js`):

```javascript
export const testimonialsData = [
  {
    id: 'test-001',
    name: 'Manager Name',
    title: 'Engineering Manager at Company',
    quote: 'Ramoji is an exceptional engineer who...',
    image: null, // Add image path if available
  },
  // ... more testimonials
];
```

#### Section Component:

```jsx
export const TestimonialsSection = () => {
  return (
    <Section id="testimonials" dark={true}>
      <Container>
        <SectionTitle 
          title="Testimonials" 
          subtitle="What colleagues say"
        />
        <Grid cols={2} gap={6}>
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.id}>
              <p className="italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-dark-600">{testimonial.title}</p>
              </div>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
```

---

### 4. Add Contact Form (UI Only)

#### Create Component (src/components/ContactForm.jsx):

```jsx
import { useState } from 'react';
import { Button } from './Button';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form data:', formData);
    alert('Thanks for reaching out! (UI only - connect to backend)');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-dark-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800"
        required
      />
      
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-dark-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800"
        required
      />
      
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-dark-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800"
        required
      />
      
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        rows="5"
        className="w-full px-4 py-2 border border-dark-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800"
        required
      />
      
      <Button type="submit" variant="primary" size="lg">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
```

#### Use in Contact Section:

```jsx
import { ContactForm } from '../components/ContactForm';

// In ContactSection, add:
<ContactForm />
```

---

### 5. Add Dark Mode Toggle

#### Create Component (`src/components/ThemeToggle.jsx`):

```jsx
import { useState, useEffect } from 'react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-lg bg-dark-100 dark:bg-dark-800"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};
```

---

### 6. Add Navigation Header

#### Create Component (`src/components/Navigation.jsx`):

```jsx
export const Navigation = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-dark-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-accent-blue">
            RS
          </a>
          
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-dark-600 hover:text-accent-blue transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
```

#### Add to App.jsx:

```jsx
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      {/* ... rest of sections */}
    </>
  );
}
```

---

### 7. Add GitHub Stats Widget

#### Create Component (`src/components/GitHubStats.jsx`):

```jsx
// This would fetch from GitHub API
export const GitHubStats = ({ username }) => {
  const [stats, setStats] = useState(null);

  // Fetch from GitHub API
  // useEffect(() => { ... }, [])

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center">
        <p className="text-2xl font-bold text-accent-blue">{stats?.repos}</p>
        <p className="text-sm text-dark-600">Repositories</p>
      </div>
      {/* ... more stats */}
    </div>
  );
};
```

---

## 📋 Extension Checklist

- [ ] Create data file in `src/data/`
- [ ] Create section component in `src/sections/`
- [ ] Import section in `App.jsx`
- [ ] Add to component tree
- [ ] Test on mobile and desktop
- [ ] Update README with new section
- [ ] Optional: Create dedicated page/route

---

## 🔗 Common APIs to Integrate

- **GitHub API** - Repository stats, contributions
- **LinkedIn API** - Profile data, recommendations
- **Dev.to API** - Blog posts
- **Medium API** - Medium articles
- **Email Service** - Form submissions (SendGrid, Mailgun)

---

## 🚀 Backend Integration Example

To connect the contact form to a backend:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

---

Still have questions? Check out the main README.md and ARCHITECTURE.md files!
