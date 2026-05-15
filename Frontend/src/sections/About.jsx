import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaPython,
  FaNode,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiPostman } from 'react-icons/si';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const bubbleRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Karan_Patel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const techs = [
    { icon: FaReact, name: 'React', color: '#61DBFB' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: FaPython, name: 'Python', color: '#3776AB' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: FaNode, name: 'Node.js', color: '#68A063' },
    { icon: SiMongodb, name: 'MongoDB', color: '#00ED64' },
    { icon: SiPostman, name: 'Postman', color: '#FF6C37' },
    { icon: FaHtml5, name: 'HTML5', color: '#E34C26' },
    { icon: FaCss3Alt, name: 'CSS3', color: '#563D7C' },
    { icon: FaGithub, name: 'GitHub', color: '#FFFFFF' },
  ];

  const stats = [
    { label: 'Projects Completed', value: '15+' },
    { label: 'Certifications', value: '5+' },
    { label: 'Hackathons', value: '8+' },
    { label: 'GitHub Contributions', value: '500+' },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
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
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate cybersecurity and full-stack developer with expertise in building
            secure, scalable digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect p-8 rounded-2xl space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-cyber-cyan mb-3">
                  Karan Patel
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A passionate Cybersecurity & Full Stack Developer focused on building
                  secure, scalable, and visually immersive digital experiences. With
                  expertise in frontend development, cybersecurity, blockchain concepts,
                  and modern web technologies, I create solutions that combine
                  functionality with stunning design.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-gray-400">
                  <span className="text-cyber-cyan font-semibold">Email:</span>{' '}
                  <a href="mailto:pkaran0510@gmail.com" className="text-cyber-cyan hover:text-white transition-colors underline">
                    pkaran0510@gmail.com
                  </a>
                </p>
                <p className="text-sm text-gray-400">
                  <span className="text-cyber-cyan font-semibold">Location:</span> Mumbai, India
                </p>
                <p className="text-sm text-gray-400">
                  <span className="text-cyber-cyan font-semibold">Status:</span>{' '}
                  <span className="text-cyber-cyan">● Available for Work</span>
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="px-6 py-3 rounded-lg bg-cyber-cyan text-cyber-black font-semibold hover-trigger w-full md:w-auto"
              >
                Download Resume
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-4 rounded-lg text-center"
                >
                  <p className="text-2xl font-bold text-cyber-cyan">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Tech Stack Bubbles */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-96 flex items-center justify-center"
          >
            {/* Floating tech bubbles */}
            {techs.map((tech, idx) => {
              const angle = (idx / techs.length) * Math.PI * 2;
              const radius = 120;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={idx}
                  animate={{
                    x: [x, x + 10, x],
                    y: [y, y - 15, y],
                  }}
                  transition={{
                    duration: 3 + idx * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  initial={{ x, y, opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-20 h-20 rounded-full glass-dark flex items-center justify-center cursor-pointer hover-trigger group relative"
                    style={{
                      border: `2px solid ${tech.color}40`,
                      boxShadow: `0 0 20px ${tech.color}40`,
                    }}
                    ref={(el) => {
                      if (el && bubbleRefs.current) {
                        bubbleRefs.current[idx] = el;
                      }
                    }}
                    onHoverStart={() => {
                      const el = bubbleRefs.current[idx];
                      if (el) {
                        el.style.boxShadow = `0 0 40px ${tech.color}80`;
                      }
                    }}
                    onHoverEnd={() => {
                      const el = bubbleRefs.current[idx];
                      if (el) {
                        el.style.boxShadow = `0 0 20px ${tech.color}40`;
                      }
                    }}
                  >
                    <tech.icon
                      size={32}
                      style={{ color: tech.color }}
                    />

                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute -top-12 whitespace-nowrap px-3 py-1 rounded-full glass-effect text-xs font-semibold text-cyber-cyan pointer-events-none"
                    >
                      {tech.name}
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Center circle */}
            <motion.div
              animate={{
                boxShadow: [
                  `0 0 20px rgba(0, 212, 255, 0.3)`,
                  `0 0 40px rgba(0, 212, 255, 0.6)`,
                  `0 0 20px rgba(0, 212, 255, 0.3)`,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="w-16 h-16 rounded-full glass-effect border border-cyber-cyan flex items-center justify-center"
            >
              <span className="text-center">
                <p className="text-2xl font-bold text-cyber-cyan">Tech</p>
                <p className="text-xs text-gray-400">Stack</p>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
