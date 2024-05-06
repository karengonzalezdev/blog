/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      purple: colors.purple,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green,
      red: colors.red,
      blue: colors.blue,
      pink: colors.pink,
      violet: colors.violet,
      first: 'rgb(8, 27, 75)',
      second: 'rgb(58, 16, 141)',
      neonGreen: 'rgb(116, 238, 21)',
      neonYellow: 'rgb(255, 231, 0)',
      neonPink: 'rgb(254, 1, 154)',
      neonBlue: 'rgb(77, 238, 234)',
    }
  },
  plugins: [],
};
