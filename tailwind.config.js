/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#a5caff'
        },
        green: {
          light: '#00b78c',
          light_1: '#00CB79',
        },
        purple: {
          light: '#A3C3FF',
          mid: '#6366F1',
        }
      }
    },
  },
  plugins: [],
}
