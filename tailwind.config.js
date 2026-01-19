/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'supercell-blue': '#0052cc',
        'supercell-dark': '#0f172a',
        'supercell-card': '#1e293b',
      }
    },
  },
  plugins: [],
}
