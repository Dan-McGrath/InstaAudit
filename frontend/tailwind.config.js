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
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        cta: ['Lato', 'sans-serif'],
        latoBold: ['LatoBold', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '4rem', // 64px
      },
    },
  },
  plugins: [],
};
