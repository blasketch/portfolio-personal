/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 AÑADIMOS ESTO
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
