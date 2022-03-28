module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          default: "1rem",
          sm: "2rem",
          lg: "4rem",
        },
      },
      fontSize: {
        "2rem": "2rem",
        "4rem": "4rem",
        "5.5rem": "5.5rem",
      },
      colors: {
        primary: "#C0B6B6",
        secondary: "#A7A7A7",
        pink: "#D02FC7",
        gray: "#313846",
        blue: "#0C93CD ",
      },
      fontFamily: {
        "SofiaPro": "SofiaPro",
        "SofiaPro-Bold": "SofiaPro-Bold",
      },
      boxShadow: {
        "3xl": "0px 4px 5px 2px #0000000D",
      },
    },
  },
  plugins: [],
};
