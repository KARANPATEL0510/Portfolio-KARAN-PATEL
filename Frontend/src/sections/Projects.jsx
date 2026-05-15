import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ShieldAlert, Smartphone, Database, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Email Phishing Detector',
      description: 'Advanced machine learning system that detects phishing and spam emails with high accuracy using NLP and threat analysis.',
      tech: ['Python', 'Machine Learning', 'NLP', 'Threat Analysis'],
      image: 'bg-gradient-to-br from-cyber-cyan to-cyber-blue',
      category: 'Cybersecurity',
      icon: ShieldAlert,
      github: 'https://github.com/KARANPATEL0510/Email-Phishing-Detector',
    },
    {
      id: 2,
      title: 'Women Safety Application',
      description: 'Android mobile application providing SOS alerts, real-time location sharing, and emergency contact notifications.',
      tech: ['Android', 'Kotlin', 'Firebase', 'GPS'],
      image: 'bg-gradient-to-br from-cyber-purple to-cyber-magenta',
      category: 'Mobile App',
      icon: Smartphone,
      github: 'https://github.com/KARANPATEL0510/Women-Safety',
    },
    {
      id: 3,
      title: 'Blockchain FIR System',
      description: 'Blockchain-based record management system with smart contract integration for anti-tampering FIR detection.',
      tech: ['Blockchain', 'Smart Contracts', 'Ethereum', 'Solidity'],
      image: 'bg-gradient-to-br from-cyber-magenta to-cyber-pink',
      category: 'Blockchain',
      icon: Database,
      github: 'https://github.com/KARANPATEL0510/Fake-Fir-Detetction',
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description: 'Full-stack shopping website with product management, responsive UI, and seamless checkout experience.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'bg-gradient-to-br from-cyber-pink to-cyber-cyan',
      category: 'Full Stack',
      icon: ShoppingCart,
      github: 'https://github.com/KARANPATEL0510/E-Commerce-Shopping-Website',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of my most impactful work combining innovative solutions with
            stunning design and seamless functionality.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden glass-effect border border-cyber-cyan border-opacity-20 hover-trigger">
                {/* Background Image */}
                <div className={`absolute inset-0 ${project.image} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 z-10">
                  {/* Top */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="inline-block px-3 py-1 rounded-full bg-cyber-cyan bg-opacity-10 border border-cyber-cyan border-opacity-30 mb-4"
                    >
                      <span className="text-xs font-semibold text-cyber-cyan">
                        {project.category}
                      </span>
                    </motion.div>
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-cyber-cyan"
                      >
                        <project.icon size={32} />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-300 text-sm mb-6 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.15 + idx * 0.05 }}
                          className="px-3 py-1 rounded-full bg-cyber-purple bg-opacity-10 border border-cyber-purple border-opacity-30 text-xs text-cyber-purple font-mono"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 rounded-lg border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-black transition-all font-semibold flex items-center justify-center gap-2 text-sm hover-trigger"
                    >
                      <Github size={16} /> Code
                    </motion.a>
                  </motion.div>
                </div>

                {/* Spotlight Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={
                    hoveredId === project.id
                      ? {
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    background: `radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.2), transparent 50%)`,
                  }}
                />

                {/* Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    border: '2px solid transparent',
                    backgroundClip: 'padding-box',
                    borderImage: 'linear-gradient(135deg, #00d4ff, #a855f7) 1',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/KARANPATEL0510"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-cyber-black transition-all font-semibold hover-trigger"
          >
            <Github size={18} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
