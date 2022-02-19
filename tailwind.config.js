module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1859FF',
        'blue-dark': '#0A1020',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
