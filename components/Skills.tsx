import React from 'react';
import { SKILLS } from '../constants';
import type { Skill } from '../types';
import SkillBadge from './SkillBadge';

const Skills = () => {
  const categorizedSkills = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  const categoryOrder: Skill['category'][] = ['Frontend', 'Backend', 'Databases', 'Tools & DevOps', 'Data analysis & Visualization'];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categoryOrder.map((category, index) => (
            categorizedSkills[category] && (
              <div 
                key={category} 
                className="bg-secondary p-6 rounded-lg shadow-md border border-gray-200 animate-fade-in-up transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-center text-accent">{category}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {categorizedSkills[category].map((skill) => (
                    <SkillBadge key={skill.name} skillName={skill.name} />
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;