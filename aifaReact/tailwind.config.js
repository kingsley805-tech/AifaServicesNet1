/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#006837',
          900: '#004d28',
          DEFAULT: '#008744',
          dark: '#01381d',
          light: '#22c55e',
        },
        safety: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          DEFAULT: '#f59e0b',
        },
        surface: {
          darker: '#060d09',
          dark: '#0d1811',
          card: '#13231a',
          light: '#f8fafc',
          muted: '#f1f5f9',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-brand': '0 0 35px -5px rgba(0, 135, 68, 0.3)',
        'glow-safety': '0 0 35px -5px rgba(245, 158, 11, 0.3)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 50% 20%, rgba(0, 135, 68, 0.15), transparent 70%)',
        'subtle-grid': 'radial-gradient(rgba(0, 135, 68, 0.1) 1px, transparent 1px)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.02)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
