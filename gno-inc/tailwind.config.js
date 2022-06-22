/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#104476',
        orange: '#F26522',
      },
      fontSize: {
        '5xl': '70px',
        '4xl': '40px',
        '2xl': '25px',
        'lg': '18px;'
      },
      lineHeight: {
        copy: '33px',
        heading: '75px',
        heading2: '60px'
      },
      minWidth: {
        button: '200px',
      },
      borderRadius: {
        button: '8px',
      },
      height: {
        button: '70px',
      },
    },
    fontFamily: {
      base: ['apertura', 'sans-serif'],
    },
    borderWidth: {
      3: '3px',
      5: '5px'
    }
  },
  plugins: [],
};
