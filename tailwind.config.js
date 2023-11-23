/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "rgb(var(--color-white) / <alpha-value>)",
        black: "rgb(var(--color-black) / <alpha-value>)",
        gray: "rgb(var(--color-gray) / <alpha-value>)",
        graydarker: "rgb(var(--color-graydarker) / <alpha-value>)",
        blue: "rgb(var(--color-blue) / <alpha-value>)",
        bluedarker: "rgb(var(--color-bluedarker) / <alpha-value>)",
        yellow: "rgb(var(--color-yellow) / <alpha-value>)",
        yellowdarker: "rgb(var(--color-yellowdarker) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
