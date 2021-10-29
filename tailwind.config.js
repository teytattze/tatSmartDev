const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      heading: ['Montserrat Alternates', 'sans-serif'],
    },
    screens: {
      xs: '384px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        white: colors.gray[50],
        black: colors.gray[900],
        darkgrey: '#262626',
        mediumgrey: '#525252',
        lightgrey: '#737373',
        lightergrey: '#A3A3A3',
        actionwhite: '#F5F5F5',
        actionblack: '#262626',
        primary: {
          light: colors.amber[400],
          DEFAULT: colors.amber[500],
          dark: colors.amber[600],
        },
        success: {
          light: colors.green[400],
          DEFAULT: colors.green[500],
          dark: colors.green[600],
        },
        error: {
          light: colors.red[400],
          DEFAULT: colors.red[500],
          dark: colors.red[600],
        },
        info: {
          light: colors.sky[400],
          DEFAULT: colors.sky[500],
          dark: colors.sky[600],
        },
        warning: {
          light: colors.yellow[400],
          DEFAULT: colors.yellow[500],
          dark: colors.yellow[600],
        },
      },
    },
  },
};
