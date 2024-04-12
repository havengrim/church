/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      grayscale: {
        50: '50%',
      }
    }
  },
  plugins: [],
}