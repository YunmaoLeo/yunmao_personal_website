import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { personalInfo } from '../../data/skills';

export default function HeroContent() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative z-10 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          {personalInfo.name}
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="text-2xl md:text-3xl text-primary font-semibold mb-3">
          {personalInfo.title}
        </p>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {personalInfo.tagline}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button
          onClick={copyEmail}
          className="group flex items-center gap-2 px-6 py-3 bg-primary hover:bg-secondary text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <Mail size={20} />
          <span className="font-medium">{personalInfo.email}</span>
          {copied ? (
            <Check size={16} className="text-green-300" />
          ) : (
            <Copy size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </button>

        <div className="flex gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 bg-surface hover:bg-accent text-secondary rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
            aria-label="Send email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/YunmaoLeo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-surface hover:bg-accent text-secondary rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/lejieliu/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-surface hover:bg-accent text-secondary rounded-full transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-16"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

