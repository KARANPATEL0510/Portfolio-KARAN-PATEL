import { useEffect, useRef } from 'react';

export const useCustomCursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Create cursor element if it doesn't exist
    if (!cursorRef.current) {
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      cursor.id = 'custom-cursor';
      document.body.appendChild(cursor);
      cursorRef.current = cursor;

      // Add styles
      const style = document.createElement('style');
      style.textContent = `
        #custom-cursor {
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.8), rgba(0, 212, 255, 0.2));
          box-shadow: 0 0 15px rgba(0, 212, 255, 0.6), inset 0 0 10px rgba(0, 212, 255, 0.3);
          z-index: 9999;
          transform: translate(-50%, -50%);
          filter: drop-shadow(0 0 5px rgba(0, 212, 255, 0.4));
          mix-blend-mode: screen;
        }

        #custom-cursor.hover {
          width: 50px;
          height: 50px;
          background: radial-gradient(circle, rgba(255, 0, 110, 0.8), rgba(168, 85, 247, 0.4));
          box-shadow: 0 0 20px rgba(255, 0, 110, 0.8), inset 0 0 15px rgba(168, 85, 247, 0.4);
        }

        .cursor-trail {
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.6), transparent);
          box-shadow: 0 0 8px rgba(0, 212, 255, 0.5);
          z-index: 9998;
          transform: translate(-50%, -50%);
        }

        * {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Calculate velocity for particle effects
      velocity.current = {
        x: e.clientX - cursorPos.current.x,
        y: e.clientY - cursorPos.current.y,
      };

      // Create trail particles
      if (Math.random() > 0.6) {
        createTrailParticle(e.clientX, e.clientY);
      }

      // Smooth cursor movement
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.2;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.left = cursorPos.current.x + 'px';
        cursorRef.current.style.top = cursorPos.current.y + 'px';
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('interactive') ||
        target.classList.contains('hover-trigger')
      ) {
        if (cursorRef.current) {
          cursorRef.current.classList.add('hover');
        }
      }
    };

    const handleMouseOut = (e) => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('hover');
      }
    };

    const createTrailParticle = (x, y) => {
      const particle = document.createElement('div');
      particle.className = 'cursor-trail';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      document.body.appendChild(particle);

      let lifetime = 0;
      const maxLifetime = 8;

      const animate = () => {
        lifetime++;
        const progress = lifetime / maxLifetime;
        particle.style.opacity = 1 - progress;
        particle.style.transform = `translate(-50%, -50%) scale(${1 - progress})`;

        if (lifetime < maxLifetime) {
          requestAnimationFrame(animate);
        } else {
          particle.remove();
        }
      };

      animate();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
};
