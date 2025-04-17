export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
};

export type Skill = {
  name: string;
  level: number;
  icon: any;
  details: string;
  category: 'frontend' | 'backend' | 'tools';
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};