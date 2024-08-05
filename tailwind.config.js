/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'popins': ['Popins', 'sans-serif'],
    },
    extend: {
      colors:{
        primary: '#000000',
        second: '#b22222',
        third: '#FFFFFF',
      },
    },
  },
  plugins: [],
}