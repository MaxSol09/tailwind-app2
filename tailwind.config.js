/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1440px',
      'md': '1024px'
    },
    extend: {
      colors: {
        'almost-white': 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'almost-black': 'hsl(0, 0%, 8%)'
      },
      gap: {
        norm: '30px'
      },
      boxShadow:{
        shadow: '3px 3px 8px 5px rgba(34, 60, 80, 0.2)'
      },
      fontSize: {
        hug: '40px'
      },
      letterSpacing:{
        big: '0.5em'
      }
    },
  }, 
  plugins: [],
}