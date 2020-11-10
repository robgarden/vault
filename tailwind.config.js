const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
        "10xl": "8rem",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "2xl": "1400px",
        "3xl": "1600px",
      },
      colors: {
        merlynn: {
          50: "#F4F5F8",
          100: "#EAEAF1",
          200: "#CACBDC",
          300: "#AAABC7",
          400: "#6B6D9E",
          500: "#2B2E74",
          600: "#272968",
          700: "#1A1C46",
          800: "#131534",
          900: "#0D0E23",
        },
      },
    },
  },
  purge: {
    content: ["./src/**/*.svelte", "./src/template.html"],
  },
  plugins: [require("@tailwindcss/ui")],
};
