const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      black: {
        DEFAULT: '#020e18'
      },
      white: {
        DEFAULT: '#FFFFFF'
      }
    },
    extend: {
      fontFamily: {
        sans: ["'Roboto'", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: []
};
