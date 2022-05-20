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
      animation: {
        ripple: "ripple 600ms linear",
      },
      keyframes: {
        ripple: {
          to: {
            transform: "scale(4)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
