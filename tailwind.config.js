/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "fredoka-one": ["Fredoka One", "cursive"],
      },
      colors: {
        "ocean-light-blue": "#00dffc",
        "ocean-medium-blue": "#008c9e",
        "ocean-dark-blue": "#005f6b",
        "black-backdrop": "#343838",
      },
    },
  },
  plugins: [],
};
