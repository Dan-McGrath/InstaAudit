/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#004D7F',
        backgroundColor: '#F5F5F5',
        secondaryColor: '#00B7B6',
        accentColor: '#FFD400',
        white: '#FFFFFF',
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
