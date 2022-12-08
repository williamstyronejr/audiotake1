/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "dark-off": "#272727",
      },
      gridTemplateColumns: {
        cards: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
