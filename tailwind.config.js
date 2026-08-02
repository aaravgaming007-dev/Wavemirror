/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070A12',
          card: '#0D1322',
          blue: '#00F2FE',
          ocean: '#0284C7',
          gold: '#FBBF24',
          amber: '#F59E0B',
          goldDark: '#D97706',
          emerald: '#10B981',
          textMuted: '#94A3B8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float-slow': 'float 6s infinite ease-in-out',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)' },
          '50%': { boxShadow: '0 0 35px rgba(251, 191, 36, 0.5), 0 0 45px rgba(0, 242, 254, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
