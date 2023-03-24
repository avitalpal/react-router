/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontSize: {
        zero: ['0px', '0px'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
