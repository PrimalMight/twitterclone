/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '6/13': '46.15%',
      },
      fontSize: {
        'xxs': '.70rem',
      },
      fontFamily: {
        body: ["Work Sans"]
      }
    },
  },
  plugins: [],
}
