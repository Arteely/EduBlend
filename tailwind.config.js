/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'purple': '#635FCE',
      'dark-purple': '#40356F',
      'white': '#ffffff',
      'grey': '#4F4F4F',
      'light-purple': 'rgba(166, 95, 206, .35)'
    },
  },
  plugins: [],
}