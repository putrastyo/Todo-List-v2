/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E6A4B4",
        secondary: "#F3D7CA",
        tertiary: "#FFF8E3",
        quartenary: "#F5EEE6",
        checked: "#474747",
      },
      fontFamily: {
        oswald: ['"Oswald"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
