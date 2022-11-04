/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      hand: ['Patrick Hand', 'ui-sans-serif', 'sans-serif'],
      content: ['Roboto', 'ui-sans-serif', 'sans-serif'],
      title: ['Playfair Display', 'serif'],
      condensed: ['Roboto Condensed', 'sans-serif']
    },
    extend: {
      colors: {
        'spinner': '#1EAAF0',
      },
      animation: {
        'spin-inner': 'spin 3s linear infinite',
        'spin-outer': 'spin 4s linear infinite',
      }
    },
  },
  plugins: [require("daisyui")],
}
