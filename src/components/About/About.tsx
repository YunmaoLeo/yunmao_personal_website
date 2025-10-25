import { motion } from 'framer-motion';
import SkillsSection from './SkillsSection';

export default function About() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700">
            <p>
              I'm a <span className="font-semibold text-secondary">Software Developer</span> passionate about building 
              scalable distributed systems and real-time applications. With hands-on experience at{' '}
              <a 
                href="https://plus.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:text-secondary transition-colors duration-300 underline decoration-primary/30 hover:decoration-secondary"
              >
                PlusAI
              </a>,{' '}
              <a 
                href="https://www.tencent.com/en-us/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:text-secondary transition-colors duration-300 underline decoration-primary/30 hover:decoration-secondary"
              >
                Tencent
              </a>, and{' '}
              <a 
                href="https://summerofcode.withgoogle.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:text-secondary transition-colors duration-300 underline decoration-primary/30 hover:decoration-secondary"
              >
                Google Summer of Code
              </a>, 
              I specialize in high-performance backend services and system design.
            </p>
            <p>
              My expertise spans across <span className="font-semibold text-accent">Java/Spring Boot</span>, 
              <span className="font-semibold text-accent"> C++</span>, 
              <span className="font-semibold text-accent"> distributed systems</span>, and 
              <span className="font-semibold text-accent"> real-time data processing</span>. 
              I thrive on solving complex technical challenges and optimizing system performance.
            </p>
          </div>
        </motion.div>

        <SkillsSection />
      </div>
    </section>
  );
}

