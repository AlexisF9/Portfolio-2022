/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1b262c",
      },
      spacing: {
        "1/2": "-50%",
        100: "100%",
      },
      transitionTimingFunction: {
        img: "cubic-bezier(.42,0,0,1.15)",
      },
      height: {
        100: "100vh",
        70: "70vh",
        50: "50vh",
        25: "25vh",
        30: "30vh",
        70: "70%",
        80: "80%",
      },
      width: {
        20: "-20px",
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
        "-1.5rem": "-1.5rem",
      },
      fontSize: {
        lg: ["20px", "28px"],
        xl: ["30px", "40px"],
      },
    },
  },
  plugins: [],
};
