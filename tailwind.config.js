/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "very-dark-blue": "#131921",
      },
      boxShadow: {
        "amazon-box-shadow": "0 0 0 2px #f90, 0 0 0 3px rgb(255 153 0 / 50%)",
      },
    },
  },
  plugins: [],
};
