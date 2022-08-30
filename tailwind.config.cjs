/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "22rem",
      md: "45rem",
      lg: "75rem",
    },
    colors: {
      surface: "#fff",
      "neutral-500": "#DFDFDF",
      "neutral-800": "#000",
      "neutral-950": "#000",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
