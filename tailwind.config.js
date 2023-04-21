/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/screens/Login.{js,jsx,ts,tsx}",
    "./src/components/Background.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
    backgroundImage: {
      "style-image": "url('./assets/style-image-1.png')",
      burger: "url('./assets/burger.png')",
      pizza: "url('./assets/pizza.png')",
      fries: "url('./assets/fries.png')",
    },
  },
  plugins: [],
};
