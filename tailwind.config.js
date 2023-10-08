/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          100: "#faf9f4",
          200: "#e8eaed",
        },
        green: "#008000",
        "system-colours-default-colors-systemwhiteblack-dark": "#000",
        dimgray: {
          100: "#606060",
          200: "#50555c",
        },
        gray: {
          100: "#fcfcfe",
          200: "#141e0d",
        },
        "system-colours-default-colors-systemgrey-2-light": "#aeaeb2",
        white: "#fff",
        silver: "#b7b7b7",
        gainsboro: "#e5e5e0",
        royalblue: "#1c63d5",
      },
      spacing: {},
      fontFamily: {
        "sf-pro": "'SF Pro'",
        "body-regular": "'SF Pro Text'",
        mulish: "Mulish",
      },
      borderRadius: {
        "980xl": "999px",
        "81xl": "100px",
        "8xs-6": "4.6px",
        "12xs": "1px",
      },
    },
    fontSize: {
      "8xl": "1.69rem",
      "3xl": "1.38rem",
      base: "1rem",
      mid: "1.06rem",
      sm: "0.88rem",
      lg: "1.13rem",
      inherit: "inherit",
    },
  },
  plugins: [],
};
