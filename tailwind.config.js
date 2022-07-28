/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "1/2": "-50%",
      },
      transitionTimingFunction: {
        img: "cubic-bezier(.42,0,0,1.15)",
      },
      height: {
        100: "100vh",
        70: "70vh",
        50: "50vh",
        30: "30vh",
        70: "70%",
        80: "80%",
      },
      fontFamily: {
        newYork: "NewYork, serif",
      },
    },
  },
  plugins: [],
};
