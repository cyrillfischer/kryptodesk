/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark': {
          900: '#050816',
          800: '#0a0f23',
          700: '#0f1629',
        },
      },
    },
  },
  plugins: [],
};
