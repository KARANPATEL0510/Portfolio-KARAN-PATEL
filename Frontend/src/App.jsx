import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useCustomCursor, useSmoothScroll, useNeonCursor } from './hooks';

// Components
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useCustomCursor();
  useSmoothScroll();
  useNeonCursor();

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loader key="loader" onLoadComplete={handleLoadComplete} />
      ) : (
        <div key="app" className="bg-gradient-to-br from-cyber-black via-cyber-dark to-cyber-darker min-h-screen">
          {/* Background Effects - Clean for Neon Cursor Laser Trail */}
          <div className="fixed inset-0 -z-10 overflow-hidden" />

          {/* Main Content */}
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
