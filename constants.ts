import type { Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: 'Sneha Das',
  title: 'Fresher Web Designer',
  bio: 'A student of CSE AI-ML from Brainware University',
  profileImage: 'https://tse4.mm.bing.net/th/id/OIP.YxLcwGnBWcPyRI1ncJa-ZgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
  email: 'sneha2018das@gmail.com',
  github: 'https://github.com/WanderSusie',
  linkedin: 'https://www.linkedin.com/in/sneha-das-682b952b4/',
  instagram: 'https://www.instagram.com/susie_das01/',
  
};

export const PROJECTS: Project[] = [
  {
    title: 'Daily Routine Manager',
    description: 'A productivity app to manage your daily schedule for work and reading, maintain streaks for consistency, and get a daily dose of motivation from an AI.',
    tags: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'HTML', 'CSS'],
    imageUrl: 'https://i.etsystatic.com/46803236/r/il/e7f8fc/5679769316/il_794xN.5679769316_dbn1.jpg',
    liveUrl: '',
    repoUrl: 'https://github.com/WanderSusie/Daily-Routine-Manager',
  },
  
  {
    title: 'Django REST API',
    description: 'Construct a one to many relationship between Companies and Employees using Django Framework with the help of REST API',
    tags: ['Python', 'Django', 'REST API', 'SQLite'],
    imageUrl: 'https://static.wixstatic.com/media/a27d24_92d18863553347df84a6c6f6084f1af0~mv2.png',
    repoUrl: 'https://github.com/WanderSusie/REST-API-',
    liveUrl: ''
  },

  {
    title: 'AI Resume Generator',
    description: 'Coming soon...',
    tags: [],
    imageUrl: 'https://logodix.com/logo/994785.png',
    repoUrl: '',
    liveUrl: ''
  },

  {
    title: 'Traveler Guide AI',
    description: 'Under developing --',
    tags: [],
    imageUrl: 'https://camo.githubusercontent.com/2881fec29166ceb53d48d1b883c1dee95e267ed738c03ec749b0fce884d8c7cc/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f636f6e74656e742d73746f726167652f696d6167652f75706c6f61642f76313735323531333535352f53637265656e73686f745f323032352d30372d31345f3232343831355f7469737661732e706e67',
    repoUrl: '',
    liveUrl: ''
  }
  
];

export const SKILLS: Skill[] = [
  { name: 'HTML & CSS', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' }, 
  { name: 'Node.js', category: 'Backend' },
  { name: 'Django', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'REST API', category: 'Backend' },
  { name: 'MySQL', category: 'Databases' },
  { name: 'SQLite', category: 'Databases' },
  { name: 'Git & GitHub', category: 'Tools & DevOps' },
  { name: 'VS Code', category: 'Tools & DevOps' },
  { name: 'Power BI', category: 'Data analysis & Visualization' },
];