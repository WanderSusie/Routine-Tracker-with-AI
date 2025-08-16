
export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Databases' | 'Tools & DevOps' | 'Data analysis & Visualization';
}
