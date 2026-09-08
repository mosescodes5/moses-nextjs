import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0a09',
        panel: '#151210',
        panel2: '#1c1815',
        hair: '#2b2620',
        bone: '#f4efe7',
        grey: '#9b9284',
        greydim: '#6b6459',
        red: {
          DEFAULT: '#af181f',
          bright: '#d23a34',
          deep: '#5e0c10',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1240px',
      },
      keyframes: {
        heroIn: {
          '0%': { transform: 'scale(1.14)', opacity: '0' },
          '100%': { transform: 'scale(1.08)', opacity: '1' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
        scrollDrop: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
      animation: {
        heroIn: 'heroIn 2.4s ease-out forwards',
        wave: 'wave 1.1s ease-in-out infinite',
        scrollDrop: 'scrollDrop 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
