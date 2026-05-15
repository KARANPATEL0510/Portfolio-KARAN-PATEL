import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setIstTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-cyber-cyan border-opacity-10 glass-effect">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyber-cyan to-cyber-purple flex items-center justify-center">
                <span className="text-white font-bold text-sm">KP</span>
              </div>
              <span className="font-bold text-gradient">KARAN PATEL</span>
            </div>
            <p className="text-gray-400 text-sm">
              Cybersecurity & Full Stack Developer crafting premium digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-cyber-cyan mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map(
                (link, idx) => (
                  <li key={idx}>
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      whileHover={{ x: 5 }}
                      className="hover:text-cyber-cyan transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-cyber-cyan mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <motion.a
                  href="https://github.com/KARANPATEL0510"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="hover:text-cyber-cyan transition-colors"
                >
                  GitHub
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://www.linkedin.com/in/karan-patel-891763381/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="hover:text-cyber-cyan transition-colors"
                >
                  LinkedIn
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://www.instagram.com/__karanpatel__5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="hover:text-cyber-cyan transition-colors"
                >
                  Instagram
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Time & Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-cyber-cyan mb-4">Status</h4>
            <div className="space-y-2">
              <div className="text-sm text-gray-400">
                <p className="font-mono">IST: {istTime}</p>
              </div>
              <motion.div
                animate={{ boxShadow: ['0 0 0 0 rgba(0, 212, 255, 0.7)', '0 0 0 10px rgba(0, 212, 255, 0)'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark border border-cyber-cyan border-opacity-30"
              >
                <div className="w-2 h-2 bg-cyber-cyan rounded-full" />
                <span className="text-xs text-cyber-cyan">Online</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyber-cyan border-opacity-10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 flex items-center gap-2"
          >
            <span>© 2024 KARAN PATEL. All rights reserved.</span>
            <Heart size={14} className="text-cyber-magenta fill-cyber-magenta" />
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg glass-dark border border-cyber-cyan border-opacity-30 text-cyber-cyan hover:border-cyber-cyan hover:border-opacity-100 transition-all hover-trigger"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
