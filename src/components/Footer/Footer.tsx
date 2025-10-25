import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/skills';

export default function Footer() {

  return (
    <footer className="bg-gradient-to-b from-surface/30 to-primary/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Name */}
          <h3 className="text-2xl font-bold text-primary mb-4">
            {personalInfo.name}
          </h3>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-white hover:bg-primary text-primary hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-md"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/YunmaoLeo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white hover:bg-secondary text-secondary hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-md"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/lejieliu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white hover:bg-accent text-accent hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Divider */}
          <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6" />
        </motion.div>
      </div>
    </footer>
  );
}

