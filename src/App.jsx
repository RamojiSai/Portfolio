/**
 * Main App Component
 * Orchestrates all sections and manages layout
 */

import { useState, useEffect } from 'react';
import { HeroSection, AboutSection, SkillsSection, ExperienceProjectsSection, EducationSection, ContactSection } from './sections';
import { FaArrowUp } from 'react-icons/fa';
import './styles/globals.css';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 text-dark-900 dark:text-white">
      <HeroSection />
      <main className="pt-32 sm:pt-36">
        <AboutSection />
        <SkillsSection />
        <ExperienceProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {showScrollTop && (
        <button
          type="button"
          onClick={handleScrollTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-12 h-12 flex items-center justify-center animate-fade-in"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </div>
  );
}

export default App;
