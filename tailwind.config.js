/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f4d04e'
      },
      width: {
        '321': '321px',
      },
      maxWidth: {
        '321': '321px',
      },
    },
  },
  plugins: [],
}