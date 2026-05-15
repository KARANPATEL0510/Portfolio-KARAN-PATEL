import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      category: 'Cybersecurity',
      skills: [
        { name: 'Threat Analysis', level: 80 },
        { name: 'Software Testing', level: 85 },
        { name: 'Security Auditing', level: 75 },
        { name: 'Blockchain Basics', level: 70 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Postman', level: 85 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Figma', level: 75 },
        { name: 'Docker', level: 70 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
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
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient in a wide range of technologies and frameworks for building
            modern, secure, and scalable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIdx * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-2xl border border-cyber-cyan border-opacity-20 hover:border-cyber-cyan hover:border-opacity-40 transition-all hover-trigger"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold text-cyber-cyan mb-6">
                {category.category}
              </h3>

              {/* Skills */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.div key={skillIdx} variants={itemVariants}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-white">
                        {skill.name}
                      </span>
                      <span className="text-xs text-cyber-cyan font-mono">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-cyber-dark rounded-full overflow-hidden border border-cyber-cyan border-opacity-10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          delay: skillIdx * 0.1,
                          duration: 1,
                          ease: 'easeOut',
                        }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full shadow-lg"
                        style={{
                          boxShadow: `0 0 10px rgba(0, 212, 255, 0.5)`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6 font-semibold">Other Competencies:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'UI/UX Design',
              'Agile Methodology',
              'Problem Solving',
              'Team Leadership',
              'Blockchain',
              'Machine Learning',
              'Cloud Services',
              'CI/CD Pipelines',
              'Database Design',
              'API Development',
              'QA Testing',
              'Test Automation',
              'Software Testing',
              'Bug Tracking',
            ].map((skill, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full glass-dark border border-cyber-purple border-opacity-30 text-cyber-purple text-sm font-medium hover-trigger cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
