module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "22px": "1.375rem",
        "2rem": "2rem",
        "4rem": "4rem",
        "5.5rem": "5.5rem",
        "28px":"1.75rem",
      },
      colors: {
        graydull:"rgba(233, 233, 233, 0.2)",
        graydull1:"rgba(233, 233, 233, 0.1)",
        graydull2:"rgba(233, 233, 233, 0.08)",
        purple1:"#261A43",
        offwhite:"#E9E9E9",
        primary: "#C0B6B6",
        secondary: "#A7A7A7",
        pink: "#D02FC7",
        gray: "#313846",
        blue: "#0C93CD ",
        gray1:"#7D7676",
        black1:"#1A2434",
      },
      fontFamily: {
        "SofiaPro": "SofiaPro",
        "SofiaPro-Regular": "SofiaPro-Regular",
        "SofiaPro-Bold": "SofiaPro-Bold",
      },
      screens: {
        "2xl": { min: "1760px", max: "1920px" },
        "3xl": { min: "1350px" },
        "2lg": { min: "1199px" },
        xs: { min: "290px", max: "500px" },
        "1860": { min: "1760px", max: "1860px" },
        "1520": { min: "1280px", max: "1520px" },
        "1280": { min: "1260px", max: "1860px" },


        

      },
      boxShadow: {
        "3xl": "0px 4px 5px 2px #0000000D",
      },
    },
  },
  plugins: [],
};
