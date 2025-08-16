import React from 'react';

interface SkillBadgeProps {
  skillName: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skillName }) => {
  return (
    <span className="bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full">
      {skillName}
    </span>
  );
};

export default SkillBadge;
