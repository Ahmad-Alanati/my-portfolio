/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily:{
        custom: ['Japan_wave','Khiara_Script','Retro_Gaming', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

