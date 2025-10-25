import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'plusai',
    title: 'Runtime System',
    organization: 'PlusAI',
    role: 'Software Engineer Intern',
    duration: '2025.06 – 2025.09',
    tech: ['C++', 'Python', 'Flask', 'PostgreSQL', 'ROS', 'Qt', 'Unreal Engine', 'Docker', 'Jenkins', 'AWS'],
    description: [
      'Built an internal data platform with Python Flask + PostgreSQL on AWS EC2; designed RESTful APIs and asynchronous task queues for large-scale video rendering jobs.',
      'Developed a C++ visualization framework integrating ROS pipelines with Qt/Unreal Engine for real-time autonomous-driving replay.',
      'Implemented multi-threaded message handling with lock-free queues and memory pools, deployed CI/CD automation using Jenkins + Docker.',
    ],
  },
  {
    id: 'tencent-wecarflow',
    title: 'Cloud & Smart Industries Group — Wecarflow',
    organization: 'Tencent Technology',
    role: 'Software Engineer Intern',
    duration: '2022.06 – 2023.01',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'MyBatis', 'React Native'],
    description: [
      'Designed and implemented RESTful APIs for playlist management, playback synchronization, and user favorites, serving 20K+ DAU.',
      'Integrated Redis caching for high-frequency song metadata access; reduced latency and database load.',
      'Built React Native interactive modules with complex animations; fixed native bridge GPU issues, improving frame stability on low-end devices.',
      'Filed and granted a patent as sole inventor.',
    ],
  },
  {
    id: 'tencent-naruto',
    title: 'Funny Bumper Car',
    organization: 'Tencent Games — Naruto Mobile',
    role: 'Game Development Intern',
    duration: '2023.05 – 2023.09',
    tech: ['Unity', 'C#', 'DOTS'],
    description: [
      'Developed a physics-based multiplayer car game with customizable gameplay architecture and realistic collision physics.',
      'Supported 8,000+ entities at 120 fps using Unity\'s Data-Oriented Technology Stack.',
      'Ranked top-3 among 29 interns and received a full-time return offer.',
    ],
  },
];

