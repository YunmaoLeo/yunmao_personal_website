import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'gsoc-ossia',
    title: 'Google Summer of Code | ossia score',
    description: 'Cross-platform ray-tracing rendering pipeline for creative data visualization',
    period: '2025.04 – Present',
    tech: ['C++', 'Vulkan', 'Qt', 'Multithreading'],
    highlights: [
      'Developed a cross-platform ray-tracing rendering pipeline in C++ using Vulkan and Qt',
      'Enabled plugin-based real-time visualization extensions',
      'Implemented multithreaded point cloud processing to parallelize decoding, filtering, and rendering tasks',
      'Improved throughput and reduced latency with modular rendering design',
    ],
    link: 'https://github.com/YunmaoLeo/score-fulldome-raytracing',
  },
  {
    id: 'music-interaction',
    title: 'Online Collective Music Interaction System',
    description: 'Real-time collaborative music platform with pose tracking and WebSocket streaming',
    period: '2025.09 – Present',
    tech: ['Java', 'Spring Boot WebFlux', 'WebSocket', 'React', 'TensorFlow.js', 'Docker', 'AWS EC2', 'PostgreSQL'],
    highlights: [
      'Built a reactive backend using Spring Boot WebFlux + WebSocket to support real-time pose data streaming with sub-100 ms latency',
      'Implemented PostgreSQL time-series storage and a replay API for time-based playback (play/pause/seek) of recorded sessions',
      'Integrated MoveNet (TensorFlow.js) for in-browser 17-keypoint skeleton tracking at 10–30 Hz',
      'Deployed multi-container architecture on AWS EC2 with Docker Compose',
    ],
    link: 'https://github.com/YunmaoLeo/multi-model-input-web-app',
  },
];

