/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/screens/Login.{js,jsx,ts,tsx}",
    "./src/components/Background.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        "trans-right": {
          "0%, 100%": { transform: "translateX(10px)" },
          "50%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "trans-right": "trans-right 1.5s ease-in-out infinite",
      },
    },
    backgroundImage: {
      "style-image": "url('./assets/style-image-1.png')",
      burger: "url('./assets/burger.png')",
      pizza: "url('./assets/pizza.png')",
      fries: "url('./assets/fries.png')",
    },
  },
  plugins: [],
};
