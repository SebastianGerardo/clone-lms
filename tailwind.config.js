/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'formButton': '#F7FAFC'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}