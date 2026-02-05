/**
 * Skills Section Component
 * Displays skills with badges
 */

import { Section, Container, Badge } from '../components';
import { skillsData } from '../data/skills';

export const SkillsSection = () => {
  const skillCategories = Object.values(skillsData);

  return (
    <Section id="skills" dark={false} className="bg-gradient-to-b from-blue-50 to-purple-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
        </div>

        {/* All Skills as Simple Badges */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {skillCategories.map((category) => 
              category.skills.map((skill, skillIdx) => (
                <Badge key={`${category.category}-${skillIdx}`} variant="default" size="md">
                  {skill.name}
                </Badge>
              ))
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default SkillsSection;
