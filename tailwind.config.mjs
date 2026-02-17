/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          blue: '#007AFF',
          'blue-light': '#5AC8FA',
        },
        secondary: {
          purple: '#5856D6',
        },
        accent: {
          green: '#30D158',
        },
        // Cake App Colors
        cake: {
          red: '#FC3D4F',
          'red-light': '#FF6B7D',
        },
        // Brand color alias
        brand: '#FC3D4F',
        // Background Colors
        bg: {
          primary: '#0a0a0a',
          secondary: '#1a1a1a',
        },
        // Dark mode surface colors
        surface: {
          DEFAULT: '#0B0B0B',
          card: '#161616',
          elevated: '#1C1C1C',
        },
        // Text Colors
        text: {
          primary: '#ffffff',
          secondary: 'rgba(255, 255, 255, 0.85)',
          tertiary: 'rgba(255, 255, 255, 0.65)',
          muted: 'rgba(255, 255, 255, 0.4)',
          body: '#E5E5E5',
        },
        // Glass Effect Colors
        glass: {
          bg: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.1)',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'system-ui',
          'sans-serif',
        ],
      },
      borderRadius: {
        DEFAULT: '20px',
        lg: '24px',
        xl: '32px',
      },
      boxShadow: {
        primary: '0 8px 32px rgba(0, 0, 0, 0.4)',
        hover: '0 32px 80px rgba(0, 0, 0, 0.6)',
        'blue-glow': '0 12px 40px rgba(0, 122, 255, 0.25)',
        'red-glow': '0 12px 40px rgba(252, 61, 79, 0.25)',
        brand: '0 0 30px rgba(252, 61, 79, 0.15)',
        'brand-lg': '0 0 60px rgba(252, 61, 79, 0.25)',
      },
      animation: {
        drift: 'drift 15s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'orbit-1': 'orbit1 20s linear infinite',
        'orbit-2': 'orbit2 25s linear infinite',
        'orbit-3': 'orbit3 18s linear infinite',
        'orbit-4': 'orbit4 22s linear infinite',
        'infinite-scroll': 'infiniteScroll 30s linear infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-delayed': 'floatSlow 6s ease-in-out 2s infinite',
        'pulse-brand': 'pulseBrand 2s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px) scale(1)',
            opacity: '0.3',
          },
          '25%': {
            transform: 'translateY(-30px) translateX(20px) scale(1.05)',
            opacity: '0.2',
          },
          '50%': {
            transform: 'translateY(-10px) translateX(-15px) scale(0.95)',
            opacity: '0.4',
          },
          '75%': {
            transform: 'translateY(15px) translateX(12px) scale(1.02)',
            opacity: '0.25',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        orbit1: {
          '0%': { transform: 'rotate(0deg) translateX(280px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(280px) rotate(-360deg)' },
        },
        orbit2: {
          '0%': { transform: 'rotate(90deg) translateX(320px) rotate(-90deg)' },
          '100%': { transform: 'rotate(450deg) translateX(320px) rotate(-450deg)' },
        },
        orbit3: {
          '0%': { transform: 'rotate(180deg) translateX(260px) rotate(-180deg)' },
          '100%': { transform: 'rotate(540deg) translateX(260px) rotate(-540deg)' },
        },
        orbit4: {
          '0%': { transform: 'rotate(270deg) translateX(300px) rotate(-270deg)' },
          '100%': { transform: 'rotate(630deg) translateX(300px) rotate(-630deg)' },
        },
        infiniteScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseBrand: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      backdropBlur: {
        glass: '40px',
      },
    },
  },
  plugins: [],
};
