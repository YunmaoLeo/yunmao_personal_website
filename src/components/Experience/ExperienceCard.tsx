import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { Experience } from '../../types';

interface Props {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="relative"
    >
      {/* Card */}
      <div className="backdrop-blur-md bg-gradient-to-br from-surface/80 to-white/80 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="text-secondary" size={20} />
              <h3 className="text-2xl font-bold text-primary">
                {experience.organization}
              </h3>
            </div>
            <p className="text-lg font-semibold text-gray-700 mb-1">
              {experience.title}
            </p>
            <p className="text-md text-secondary font-medium">
              {experience.role}
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600 bg-white/60 px-4 py-2 rounded-full">
            <Calendar size={16} />
            <span className="text-sm font-medium whitespace-nowrap">
              {experience.duration}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2 mb-6">
          {experience.description.map((desc, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-primary mt-1.5 flex-shrink-0">•</span>
              <p className="text-gray-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-accent/20 to-secondary/20 text-secondary rounded-full text-sm font-medium hover:from-accent/30 hover:to-secondary/30 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -z-10 top-4 left-4 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
    </motion.div>
  );
}

