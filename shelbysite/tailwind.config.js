/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-10": "#2d2d2f",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "red-10": "#f90500",
        "primary-100": "#FFE1E0",
        "primary-500": "#FF6B66",
        "orange-10": "#f6982d",
        "orange-20": "#ef7c14",
        "yellow-10": "#ffee5c",
        "secondary-500": "#FFC132",
        "brown-10": "#53310b",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "360px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}