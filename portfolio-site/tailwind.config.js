/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/app/app.component.html",
    "./src/app/*.{html,js}", 
    "./src/libs/**/src/lib/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
