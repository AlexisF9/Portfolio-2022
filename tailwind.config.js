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
      fontFamily: {
        body: ['"Italiana"', '"serif"'],
      },
      height: {
        50: "50vh",
      },
    },
  },
  plugins: [],
};
