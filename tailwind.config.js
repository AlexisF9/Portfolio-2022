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
        100: "100%",
      },
      transitionTimingFunction: {
        img: "cubic-bezier(.42,0,0,1.15)",
      },
      height: {
        100: "100vh",
        80: "80vh",
        70: "70vh",
        50: "50vh",
        30: "30vh",
        70: "70%",
        80: "80%",
      },
      width: {
        20: "-20px",
        80: "80vh",
        90: "90%",
        80: "80%",
        70: "70%",
        50: "50%",
        30: "30%",
      },
      fontFamily: {
        newYork: "NewYork, serif",
      },
      borderRadius: {
        100: "100%",
      },
      boxShadow: {
        "3xl": "0 0 60px -15px rgba(0, 0, 0, 0.3)",
      },
      inset: {
        "-50px": "-50px",
      },
    },
  },
  plugins: [],
};
