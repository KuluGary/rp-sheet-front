/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
    },
    fontFamily: {
      shadows: ["Shadows Into Light", "sans-serif"],
    },
  },
  plugins: [],
};
