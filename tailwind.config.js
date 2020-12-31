const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        heroMobileLight: "url('/src/images/bg-mobile-light.jpg')",
        heroDesktopLight: "url('/src/images/bg-desktop-light.jpg')",
        heroMobileDark: "url('/src/images/bg-mobile-dark.jpg')",
        heroDesktopDark: "url('/src/images/bg-desktop-dark.jpg')",
      }),
    },
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      bgBody: {
        light: "hsl(236, 33%, 92%)",
        dark: "hsl(235, 21%, 11%)",
      },
      txt: {
        light: "hsl(235, 19%, 35%)",
        dark: "hsl(234, 11%, 52%)",
        special: "hsl(233, 14%, 35%)",
      },
      elements: {
        light: "hsl(0, 0%, 98%)",
        dark: "hsl(235, 24%, 19%)",
      },
      bdr: {
        light: "hsl(236, 33%, 92%)",
        dark: "hsl(237, 14%, 26%)",
      },
      input: {
        light: "hsl(235, 19%, 35%)",
        dark: "hsl(236, 9%, 61%)",
      },
    },
    letterSpacing: {
      widest: "10px",
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
