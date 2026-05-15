import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Reveal animation on scroll
export const animateOnScroll = (element, options = {}) => {
  const {
    duration = 0.8,
    delay = 0,
    distance = 50,
    direction = 'up',
    stagger = 0.1,
  } = options;

  const direction_values = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 },
  };

  gsap.fromTo(
    element,
    direction_values[direction] || direction_values.up,
    {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      delay,
      stagger,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 50%',
        scrub: false,
        markers: false,
      },
      ease: 'power3.out',
    }
  );
};

// Scroll-triggered animations
export const createScrollAnimation = (selector, animation = {}) => {
  const {
    from = {},
    to = {},
    duration = 1,
    ease = 'power2.inOut',
    scrub = false,
    markers = false,
  } = animation;

  gsap.fromTo(
    selector,
    from,
    {
      ...to,
      duration,
      ease,
      scrollTrigger: {
        trigger: selector,
        start: 'top center',
        end: 'bottom center',
        scrub,
        markers,
      },
    }
  );
};

// Parallax effect
export const createParallax = (element, speed = 0.5) => {
  gsap.to(element, {
    y: () => window.innerHeight * speed,
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
    },
  });
};

// Staggered children animation
export const staggerChildren = (parent, children, options = {}) => {
  const { duration = 0.6, delay = 0.1, distance = 30 } = options;

  gsap.fromTo(
    children,
    { opacity: 0, y: distance },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger: delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: parent,
        start: 'top 75%',
      },
    }
  );
};
