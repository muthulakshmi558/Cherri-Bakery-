/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
      },
      colors: {
        bakeryBrown: '#D99A6C',
        bakeryCream: '#F3E5AB',
        bakeryWhite: '#FFF8F0',
      },
    },
  },
  plugins: [],
}
