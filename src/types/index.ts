export interface SolutionItem {
  id: string;
  title: string;
  image: string;
  iconName: string;
  items: string[];
  summary: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  deliverables: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  client: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  serviceType: string;
  message: string;
}

export interface WorkShowcaseItem {
  id: string;
  index: string;
  title: string;
  discipline: string;
  filterKey: '3d' | 'spatial' | 'brand';
  client: string;
  year: string;
  image: string;
  headline: string;
  summary: string;
  deliverables: string[];
  metricValue: string;
  metricLabel: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  projectType: string;
  outcome: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  category: '3D & Spatial' | 'AI Workflows' | 'Brand Strategy' | 'Experiential';
  date: string;
  readTime: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}
