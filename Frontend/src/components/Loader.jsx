import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);

  const fullText = '> KARAN_ORBIT.EXE';
  const lines = [
    '> Initializing cybersecurity protocols...',
    '> Loading immersive experience...',
    '> Calibrating neural interfaces...',
    '> Unlocking digital dimensions...',
    '> System ready.',
  ];

  useEffect(() => {
    // Typing animation
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    // Progress animation - ensures reaching 100%
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          progressRef.current = 100;
          return 100;
        }
        // Accelerate progress as it gets closer to 100%
        const increment = prev < 30 ? Math.random() * 15 : 
                         prev < 60 ? Math.random() * 10 : 
                         prev < 90 ? Math.random() * 5 : 2;
        const newProgress = Math.min(prev + increment, 100);
        progressRef.current = newProgress;
        return newProgress;
      });
    }, 200);

    // Complete loading only after progress reaches 100%
    const checkProgressTimer = setInterval(() => {
      if (progressRef.current >= 100) {
        clearInterval(checkProgressTimer);
        clearInterval(progressInterval);
        setTimeout(() => {
          setIsLoading(false);
          onLoadComplete();
        }, 300);
      }
    }, 100);

    // Safety timeout to ensure loader completes
    const safetyTimeout = setTimeout(() => {
      clearInterval(typingInterval);
      clearInterval(progressInterval);
      clearInterval(checkProgressTimer);
      setIsLoading(false);
      onLoadComplete();
    }, 5000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(progressInterval);
      clearInterval(checkProgressTimer);
      clearTimeout(safetyTimeout);
    };
  }, [onLoadComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-gradient-to-br from-cyber-black via-cyber-dark to-cyber-darker flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber-cyan rounded-full"
            animate={{
              x: Math.cos((i / 20) * Math.PI * 2) * 200,
              y: Math.sin((i / 20) * Math.PI * 2) * 200,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: '50%',
              top: '50%',
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Logo / Title */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-2">
            KARAN PATEL
          </h1>
          <p className="text-cyber-cyan text-sm tracking-widest">
            CYBERSECURITY DEVELOPER
          </p>
        </motion.div>

        {/* Terminal Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8 font-mono text-left inline-block"
        >
          <div className="text-cyber-cyan text-sm min-h-[60px]">
            <p className="mb-2">
              <span className="text-cyber-purple">{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                _
              </motion.span>
            </p>
            {progress >= 30 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-cyber-cyan"
              >
                {lines[Math.min(Math.floor(progress / 20), lines.length - 1)]}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="w-64 h-1 bg-cyber-dark rounded-full overflow-hidden border border-cyber-cyan border-opacity-30 mx-auto">
            <motion.div
              className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-purple"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-cyber-cyan text-xs mt-4 font-mono">
            {Math.round(progress)}%
          </p>
        </motion.div>

        {/* Loading text */}
        <motion.p
          animate={{ opacity: [0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-cyber-cyan text-xs mt-8 font-mono"
        >
          Initializing...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
