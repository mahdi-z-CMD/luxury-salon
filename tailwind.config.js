module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monument: ['Monument Extended', 'sans-serif'],lovelace: ['Lovelace Text', 'serif'],
      },
      colors: { orangeColor: 'var(--orange-color)', },
    },
  },
  plugins: [],
}
