const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./css/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: colors.zinc,
        secondary: colors.amber,
        highlight: colors.purple,
      },
    },
  },
  plugins: [],
}

