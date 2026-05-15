import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Award } from 'lucide-react';

const Experience = () => {
  const timeline = [
    {
      type: 'work',
      title: 'Web Developer Intern',
      company: 'Sahu Technologies',
      date: '2023 - Present',
      description:
        'Developed and maintained web applications using React and Node.js. Implemented responsive UI designs and optimized performance.',
      icon: Briefcase,
      color: 'text-cyber-cyan',
    },
    {
      type: 'education',
      title: 'B.Tech in Computer Science',
      company: 'Xavier Institute of Engineering',
      date: '2021 - 2025',
      description:
        'Pursuing Bachelor of Technology in Computer Science with focus on cybersecurity and full-stack development.',
      icon: BookOpen,
      color: 'text-cyber-purple',
    },
    {
      type: 'education',
      title: 'Diploma in CSE',
      company: 'Government Polytechnic',
      date: '2018 - 2021',
      description:
        'Completed diploma course with specialization in computer science and engineering fundamentals.',
      icon: BookOpen,
      color: 'text-cyber-magenta',
    },
    {
      type: 'certification',
      title: 'Cybersecurity Certification',
      company: 'Skills4Future',
      date: '2023',
      description:
        'Completed comprehensive cybersecurity training covering threat analysis, ethical hacking, and security protocols.',
      icon: Award,
      color: 'text-cyber-pink',
    },
  ];

  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-400 text-lg">
            Journey of growth through work experience and continuous learning
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-cyan via-cyber-purple to-cyber-magenta transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex gap-8 md:gap-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-effect p-6 rounded-2xl border border-cyber-cyan border-opacity-20 hover:border-cyber-cyan hover:border-opacity-40 transition-all hover-trigger"
                    >
                      <div className="flex items-start gap-3 md:flex-row-reverse mb-3">
                        <div
                          className={`p-2 rounded-lg glass-dark border ${item.color} border-opacity-30`}
                        >
                          <Icon className={`${item.color}`} size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                            {item.title}
                          </h3>
                          <p className={`${item.color} font-semibold text-sm`}>
                            {item.company}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-gray-400 font-mono mb-3">
                        {item.date}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex justify-center">
                    <motion.div
                      animate={{
                        boxShadow: [
                          `0 0 0 4px rgba(15, 22, 41, 1), 0 0 20px 0 ${
                            item.color === 'text-cyber-cyan'
                              ? 'rgba(0, 212, 255, 0.5)'
                              : item.color === 'text-cyber-purple'
                              ? 'rgba(168, 85, 247, 0.5)'
                              : item.color === 'text-cyber-magenta'
                              ? 'rgba(255, 0, 255, 0.5)'
                              : 'rgba(255, 0, 110, 0.5)'
                          }`,
                          `0 0 0 4px rgba(15, 22, 41, 1), 0 0 40px 0 ${
                            item.color === 'text-cyber-cyan'
                              ? 'rgba(0, 212, 255, 0.8)'
                              : item.color === 'text-cyber-purple'
                              ? 'rgba(168, 85, 247, 0.8)'
                              : item.color === 'text-cyber-magenta'
                              ? 'rgba(255, 0, 255, 0.8)'
                              : 'rgba(255, 0, 110, 0.8)'
                          }`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className={`w-4 h-4 rounded-full ${item.color} bg-current`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
