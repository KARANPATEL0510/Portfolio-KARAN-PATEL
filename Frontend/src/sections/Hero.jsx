import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const phrases = [
    'I build secure digital experiences.',
    'I create immersive web applications.',
    'I solve real-world problems.',
    'I turn ideas into futuristic products.',
    'Developer • Security Enthusiast • Innovator',
  ];

  useEffect(() => {
    const currentPhrase = phrases[textIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentPhrase.length) {
        setText(currentPhrase.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        // Wait before switching to next phrase
        const switchTimer = setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % phrases.length);
          setText('');
        }, 2000);
        return () => clearTimeout(switchTimer);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [textIndex]);

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 -left-40 w-80 h-80 bg-cyber-cyan opacity-20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 -right-40 w-80 h-80 bg-cyber-purple opacity-20 rounded-full blur-3xl"
        />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6 hover-trigger"
            >
              <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
              <span className="text-sm text-cyber-cyan font-mono">
                Available for Work
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="text-gradient">KARAN PATEL</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-cyber-cyan font-light mb-6">
                Cybersecurity & Full Stack Developer
              </h2>
            </motion.div>

            {/* Typing Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8 h-10 flex items-center"
            >
              <p className="text-lg text-gray-300">
                {text}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="ml-1 text-cyber-cyan"
                >
                  |
                </motion.span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyber-cyan to-cyber-purple text-cyber-black font-semibold flex items-center gap-2 hover-trigger group"
              >
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-3 rounded-lg border border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-cyber-black transition-all font-semibold flex items-center gap-2 hover-trigger"
              >
                <Code size={18} />
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-cyber-cyan border-opacity-20"
            >
              {[
                { label: 'Projects', value: '15+' },
                { label: 'Certifications', value: '5+' },
                { label: 'GitHub', value: '100+' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <p className="text-2xl md:text-3xl font-bold text-cyber-cyan">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative h-96 md:h-full hidden lg:flex items-center justify-center"
          >
            {/* Holographic card effect */}
            <motion.div
              animate={{
                rotateY: [0, 5, 0],
                rotateX: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-sm"
              style={{
                perspective: '1000px',
              }}
            >
              <div className="relative">
                {/* Card */}
                <div className="glass-effect p-8 rounded-2xl border border-cyber-cyan border-opacity-40">
                  <div className="space-y-6">
                    <div>
                      <div className="h-40 bg-gradient-to-br from-cyber-cyan to-cyber-purple rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                        <img 
                          src="https://ui-avatars.com/api/?name=Karan+Patel&background=00d4ff&color=000&size=256&bold=true"
                          alt="Karan Patel"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gradient">
                        Cybersecurity Expert
                      </h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-300">
                        Full Stack Development
                      </p>
                      <p className="text-sm text-gray-300">
                        Security Analysis
                      </p>
                      <p className="text-sm text-gray-300">
                        Blockchain Integration
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full opacity-60"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="absolute w-12 h-12 rounded-lg glass-effect border border-cyber-cyan border-opacity-40"
                    style={{
                      top: `${-50 + i * 30}%`,
                      left: `${-20 + i * 40}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollDown}
            className="flex flex-col items-center gap-2 text-cyber-cyan hover:text-cyber-purple transition-colors hover-trigger"
          >
            <span className="text-sm font-mono">Scroll to explore</span>
            <div className="w-6 h-10 border border-cyber-cyan rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-cyber-cyan rounded-full mt-2"
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
