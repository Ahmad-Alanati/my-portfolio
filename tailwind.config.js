/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  corePlugins: {
    preflight: false,
    apply: true,
  },
  theme: {
    extend: {
      fontFamily: {
        Japan_wave: ['Japan_wave', ...defaultTheme.fontFamily.sans],
        Brastagi_Regular: ['Brastagi_Regular', ...defaultTheme.fontFamily.sans],
        Retro_Gaming: ['Retro_Gaming', ...defaultTheme.fontFamily.sans],

      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        greenish: "#C3E2C2",
        skys: "#C5FFF8"
      },
    },
  },
  plugins: [],
}

