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
        lightBlue: '#01ADEE',
        white: 'white'
      },
      fontSize: {
        '5xl': '60px',
        '4.5xl': '55px',
        '4xl': '40px',
        '2xl': '25px',
        'lg': '18px;'
      },
      lineHeight: {
        copy: '33px',
        heading: '75px',
        heading2: '60px',
        heading3: '55px'
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
      boxShadow: {
        tile: '0px 0px 16px #0000001F'
      },
      borderWidth: {
        3: '3px',
        5: '5px',
        10: '10px'
      },

    },
    fontFamily: {
      base: ['apertura', 'sans-serif'],
    },
   
  },
  plugins: [],
};
