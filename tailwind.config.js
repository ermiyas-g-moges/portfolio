/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'dark-surface': '#1a1a1a',
        'dark-card': '#2d2d2d',
        'dark-border': '#333333',
        'accent-teal': '#00ffbb',
        'accent-pink': '#ff3366',
        'accent-blue': '#4d9fff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 4px rgba(0, 255, 187, 0.3)' },
          '50%': { textShadow: '0 0 8px rgba(0, 255, 187, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        fadeIn: 'fadeIn 0.4s ease-out forwards',
        slideInLeft: 'slideInLeft 0.4s ease-out forwards',
        slideInRight: 'slideInRight 0.4s ease-out forwards',
        pulse: 'pulse 2s ease-in-out infinite',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};