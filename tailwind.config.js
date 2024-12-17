/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        majormono: ["Major Mono", "sans-serif"],
        notosans: ["Noto Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}
