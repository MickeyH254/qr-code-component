/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        lightGray: 'hsl(212, 45%, 89%)',
        grayishBlue: 'hsl(220, 15%, 55%)',
        darkBlue: 'hsl(218, 44%, 22%)'
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      screen: {
        sm: '375px',
        lg: '1440px',
      }
    },
  },
  plugins: [],
}
