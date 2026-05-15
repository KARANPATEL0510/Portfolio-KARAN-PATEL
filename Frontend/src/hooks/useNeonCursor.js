import { useEffect } from 'react';

export const useNeonCursor = () => {
  useEffect(() => {
    // Function to initialize neon cursor with laser trail effect
    const initializeNeonCursor = () => {
      // Check if the library is loaded
      if (window.neonCursor && typeof window.neonCursor === 'function') {
        try {
          // Initialize neon cursor with enhanced laser trail settings
          window.neonCursor({
            el: document.getElementById('root') || document.body,
            shaderPoints: 16,        // Shader quality
            curvePoints: 100,        // More points for smoother laser trail
            curveLerp: 0.45,         // Curve interpolation for smooth trail
            radius1: 8,              // Inner radius - enhanced
            radius2: 40,             // Outer radius - enhanced for laser effect
            velocityTreshold: 8,     // Lower threshold for more responsive trail
            sleepRadiusX: 120,
            sleepRadiusY: 120,
            sleepTimeCoefX: 0.002,
            sleepTimeCoefY: 0.002,
          });
          console.log('✓ Neon cursor laser trail initialized successfully');
        } catch (error) {
          console.warn('Neon cursor initialization error:', error.message);
        }
      } else {
        // Retry if library hasn't loaded yet
        setTimeout(initializeNeonCursor, 200);
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(initializeNeonCursor, 500);

    return () => clearTimeout(timeoutId);
  }, []);
};

