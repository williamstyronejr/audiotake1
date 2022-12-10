/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "dark-off": "#272727",
        "nav-menu": "#333333",
      },
      gridTemplateColumns: {
        audio: "repeat(auto-fit, minmax(200px, 1fr))",
        cards: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
