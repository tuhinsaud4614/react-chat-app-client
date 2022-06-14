const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          ...defaultTheme.fontFamily.sans,
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        primary: "#50baec",
        secondary: "#145c81",
      },
      screens: {
        md1: "960px",
        // => @media (min-width: 960px) { ... }
      },
      animation: {
        tooltip: "tooltip .1s ease-out",
        tooltipArrow: "tooltipArrow .1s ease-out",
        ripple: "ripple 600ms linear",
        "infinite-ripple": "infinite-ripple 1.2s infinite ease-in-out",
      },
      keyframes: {
        tooltip: {
          "0%": {
            opacity: "0",
            transform: "scale(1.2)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        tooltipArrow: {
          "0%": {
            opacity: "0",
            transform: "scale(1.2) rotate(45deg)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(45deg)",
          },
        },
        ripple: {
          to: {
            transform: "scale(4)",
            opacity: "0",
          },
        },
        "infinite-ripple": {
          "0%": {
            transform: "scale(0.8)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(2.4)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
