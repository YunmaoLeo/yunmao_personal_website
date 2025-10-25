import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    color: '#2EC4B6',
    skills: ['Java', 'C++', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C#'],
  },
  {
    category: 'Backend',
    color: '#FF9F1C',
    skills: ['Spring Boot', 'Spring WebFlux', 'Flask', 'MyBatis', 'gRPC', 'Netty', 'RESTful APIs'],
  },
  {
    category: 'Databases & Caching',
    color: '#FFBF69',
    skills: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'ElasticSearch'],
  },
  {
    category: 'Cloud & DevOps',
    color: '#2EC4B6',
    skills: ['AWS (EC2, S3, RDS)', 'Docker', 'Jenkins', 'Linux', 'Nginx'],
  },
  {
    category: 'Messaging & Realtime',
    color: '#FF9F1C',
    skills: ['RabbitMQ', 'Redis Pub/Sub', 'WebSocket', 'ROS'],
  },
  {
    category: 'Frontend & UI',
    color: '#FFBF69',
    skills: ['React', 'React Native', 'TypeScript', 'Qt'],
  },
  {
    category: 'Systems & Architecture',
    color: '#2EC4B6',
    skills: ['Distributed Systems', 'Multithreading', 'Microservices', 'Data Structures & Algorithms'],
  },
];

export const personalInfo = {
  name: 'Lejie Liu',
  email: 'lejie.liu.gr@dartmouth.edu',
  title: 'Software Developer',
  tagline: 'Building scalable systems and real-time applications',
};

