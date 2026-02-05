/**
 * About Section Component
 * Displays professional summary
 */

import { Section, Container } from '../components';
import { portfolioData } from '../data/portfolio';

export const AboutSection = () => {
  const { personal } = portfolioData;

  return (
    <Section id="about" dark={false} className="bg-gradient-to-b from-blue-50 to-purple-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          
          <p className="text-lg text-dark-700 dark:text-dark-300 leading-relaxed">
            Python Backend Developer with 2 years of experience building scalable REST APIs and AI-powered backend systems. Specialized in LLM evaluation and fine-tuning workflows using FastAPI and Hugging Face, with strong experience in GPU/CPU/RAM monitoring and performance optimization using Prometheus and Grafana.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
