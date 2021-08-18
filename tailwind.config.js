const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "title-bg": "url('/src/assets/main_panel_bg.png')",
      }),
      colors: {
        brown: {
          100: "#b3b3b3",
          200: "#bea48b",
          300: "#504f54",
          400: "#373739",
          600: "#2a292e",
          700: "#212123",
          800: "#211c1e",
        },
        orange: "#ea5c1f",
      },
      grayscale: {
        90: ".9",
        100: "1",
      },
    },
  },
  variants: {
    extend: {
      grayscale: ["hover", "focus"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const extendLineThrough = {
        ".line-through": {
          textDecoration: "line-through",
          "text-decoration-color": "#ea5c1f",
          "text-decoration-thickness": "2px",
        },
      };
      addUtilities(extendLineThrough);
    }),
  ],
};
