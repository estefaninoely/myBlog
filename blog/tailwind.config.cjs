/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rosa: "#E08787",
        hellrosa: "#F0D6D6",
        oldrosa: "#F7B0B0",
        darkest: "#202029",
        hellespink: "#FFE7E7",
        dunkel: "#1E1E1E",
        bgdunkel: "#121218",
        button: "#E08787",
        white: "#F5F1F1",
      },
      height: { "h-100": "28rem", "h-102": "31,87rem" },
      width: { "w-100": "32rem" },
      maxWidth: { "max-w-medium": "50%", "max-w-xl": "70%" },
      fontFamily: { "dancing-script": "Dancing Script" },
      backgroundImage: {
        "bg-form":
          "url('https://i.pinimg.com/564x/98/3d/c2/983dc27707ea0b87fce20e7afb10b32a.jpg')",
      },
    },
  },
  plugins: [],
};
