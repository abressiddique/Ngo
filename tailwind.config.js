// const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          tblack: "#1d2020",
          pBlue: '#29427b',
          sBlue: '#00b7ec',
          accenty: '#fcbb52',
          bgwhite: '#FFFFFF',
        },
        fontFamily: {
          sans: ['var(--regular)'],
        },
        animation: {
          blob: "blob 7s infinite",
          blob2: "blob2 10s infinite",
        },
        keyframes: {
          blob: {
            "0%": {
              transform: "translate(0px, 0px) scale(1)",
              filter: "blur(2px)",
            },
            "33%": {
              transform: "translate(30px, -50px) scale(1.1)",
              filter: "blur(0px)",
            },
            "66%": {
              transform: "translate(-20px, 20px) scale(0.9)",
              filter: "blur(2px)",
            },
            "100%": {
              transform: "tranlate(0px, 0px) scale(1)",
              filter: "blur(1px)",
            },
          },
          blob2: {
            "0%": {
              transform: "translate(0px, 0px) scale(1)",
              filter: "blur(2px)",
            },
            "50%": {
              transform: "translate(20px, -20px) scale(1.1)",
              filter: "blur(0px)",
            },
            "100%": {
              transform: "tranlate(0px, 0px) scale(1)",
              filter: "blur(1px)",
            },
          },
        },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
