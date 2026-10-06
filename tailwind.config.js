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
        campus: {
          cream: '#FDFBF7',
          border: '#F0EBE1',
          lilac: '#D8B4E2',
          pastelBlue: '#AEC6CF',
          sage: '#B2AC88',
          slateBlue: '#748CAB',
          darkBg: '#1A1A1C',
          darkCard: '#242426',
          darkSub: '#2A2A2C',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        }
      },
      animation: {
        wave: 'wave 1.5s infinite',
      }
    },
  },
  plugins: [],
}
