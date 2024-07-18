/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#A68FF1",
        "secondary":"#B8E1EE",
        "tertiary":"#1C4650",
        "quaternary":"#FBFBFB",
        "quinary":"#000000",
      }
    },
  },
  plugins: [],
}