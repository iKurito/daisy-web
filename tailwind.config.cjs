/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      fredoka: ['Fredoka', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#AED9E0',
        secondary: '#B8F2E6',
        third: '#FAF3DD',
        fourth: '#F79219',
      },
      spacing: {
        128: '32rem',
      },
      screens: {
        xs: '512px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
