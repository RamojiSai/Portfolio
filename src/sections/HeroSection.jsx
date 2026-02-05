/**
 * Hero Section Component
 * Displays name, title, tagline, and CTAs
 */

import { Button, Container } from '../components';
import { portfolioData } from '../data/portfolio';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const HeroSection = () => {
  const { personal, contact } = portfolioData;

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-blue-50/95 to-purple-50/90 backdrop-blur border-b border-blue-100"
      >
        <Container>
          <div className="text-center max-w-4xl mx-auto py-3 sm:py-4">
            {/* Primary Navigation */}
            <nav aria-label="Primary">
              <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full bg-white/80 backdrop-blur px-4 py-2 shadow-sm border border-blue-100">
                <a
                  href="#about"
                  className="px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                >
                  About Me
                </a>
                <span className="hidden sm:inline text-gray-300">•</span>
                <a
                  href="#skills"
                  className="px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Skills
                </a>
                <span className="hidden sm:inline text-gray-300">•</span>
                <a
                  href="#experience"
                  className="px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Experience & Projects
                </a>
              </div>
            </nav>
          </div>
        </Container>
      </header>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-24 bg-gradient-to-b from-blue-50 to-purple-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto py-20">
            {/* Name */}
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm {personal.name.split(' ')[1]} 👋
            </h1>
            
            {/* Title */}
            <h2 className="text-xl sm:text-2xl text-gray-600 font-normal mb-6">
              {personal.title}
            </h2>

            {/* Social Links */}
            <div className="flex gap-6 justify-center items-center mb-8">
              {contact.social.slice(0, 2).map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                  aria-label={social.platform}
                >
                  {social.platform === 'GitHub' && <FaGithub className="text-4xl" />}
                  {social.platform === 'LinkedIn' && <FaLinkedin className="text-4xl" />}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <Button variant="primary" size="lg" as="a" href={`mailto:${contact.email}`}>
              Contact Me
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
