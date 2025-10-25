import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Code } from 'lucide-react';
import { Project } from '../../types';
import { useState } from 'react';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative h-full"
    >
      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="h-full backdrop-blur-md bg-gradient-to-br from-white/90 to-surface/70 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-primary/20 overflow-hidden"
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Code className="text-secondary flex-shrink-0" size={24} />
              <h3 className="text-xl font-bold text-primary line-clamp-2">
                {project.title}
              </h3>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 p-2 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          {/* Period */}
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Calendar size={16} />
            <span className="text-sm font-medium">{project.period}</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2 mb-6">
            {project.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex gap-2"
              >
                <span className="text-secondary mt-1 flex-shrink-0">▸</span>
                <p className="text-sm text-gray-600 leading-relaxed">{highlight}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-xs font-medium hover:from-primary/20 hover:to-accent/20 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

