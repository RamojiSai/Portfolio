/**
 * Contact Section Component
 * Displays contact information
 */

import { Section, Container, Button } from '../components';
import { portfolioData } from '../data/portfolio';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const ContactSection = () => {
  const { contact } = portfolioData;

  return (
    <Section id="contact" dark={false}>
      <Container>
        <div className="max-w-2xl mx-auto text-center py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get In Touch</h2>
          
          <p className="text-lg text-dark-600 dark:text-dark-400 mb-8">
            I'm currently available for new opportunities. Feel free to reach out!
          </p>

          {/* Contact Email */}
          <div className="mb-8">
            <p className="text-dark-700 dark:text-dark-300 mb-4">
              <strong>Email:</strong> {contact.email}
            </p>
            <p className="text-dark-700 dark:text-dark-300">
              <strong>Phone:</strong> {contact.phone}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-8">
            {contact.social.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-dark-700 dark:text-dark-300 hover:text-accent-blue dark:hover:text-accent-blue transition-colors group"
                aria-label={social.platform}
              >
                {social.platform === 'LinkedIn' && <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform" />}
                {social.platform === 'GitHub' && <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />}
                {social.platform === 'Email' && <FaEnvelope className="text-2xl group-hover:scale-110 transition-transform" />}
                <span className="font-medium">{social.platform}</span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            variant="primary" 
            size="lg" 
            as="a" 
            href={`mailto:${contact.email}`}
          >
            Send me an email
          </Button>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-dark-200 dark:border-dark-700">
            <p className="text-sm text-dark-500 dark:text-dark-500">
              © 2024 Ramoji Saikiran. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
