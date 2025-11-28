export interface Attorney {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  practiceAreas: string[];
  education: string[];
  admissions: string[];
}

export interface Insight {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content?: string;
  image: string;
}

export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  subPractices: string[]; // Changed from capabilities to subPractices to match new spec
}

export enum Page {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  TEAM = 'TEAM',
  INSIGHTS = 'INSIGHTS',
  CONTACT = 'CONTACT',
}