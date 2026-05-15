/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#0a0e27',
          dark: '#0f1629',
          darker: '#050810',
          cyan: '#00d4ff',
          purple: '#a855f7',
          magenta: '#ff00ff',
          pink: '#ff006e',
          blue: '#0099ff',
          glow: '#00d4ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'typing': 'typing 3.5s steps(40, end), blink .75s step-end infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { 'box-shadow': '0 0 10px rgba(0, 212, 255, 0.4)' },
          '50%': { 'box-shadow': '0 0 30px rgba(0, 212, 255, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#00d4ff' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 212, 255, 0.6)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.6)',
        'neon-magenta': '0 0 20px rgba(255, 0, 255, 0.6)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.gradient-text': {
          'background': 'linear-gradient(135deg, #00d4ff, #a855f7, #ff00ff)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          'background': 'rgba(0, 0, 0, 0.3)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(0, 212, 255, 0.2)',
        },
      });
    },
  ],
};
