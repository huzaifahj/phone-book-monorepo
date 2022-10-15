const formkitTailwindPlugin = require("@formkit/themes/tailwindcss")

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [formkitTailwindPlugin],
  darkMode: "class",
}
