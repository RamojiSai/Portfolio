/**
 * Education Section Component
 * Displays educational background
 */

import { Section, Container, Card } from '../components';
import { educationData } from '../data/education';

export const EducationSection = () => {
  return (
    <Section id="education" dark={false}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {educationData.map((edu) => (
            <Card key={edu.id} hover={false} className="text-center">
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-lg text-accent-blue mb-2">
                {edu.field}
              </p>
              <p className="text-dark-600 dark:text-dark-400">
                {edu.institution} • {edu.year}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default EducationSection;
