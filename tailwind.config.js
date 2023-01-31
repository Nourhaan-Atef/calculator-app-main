/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Theme 1
        // Backgrounds
        mainBg: "hsl(222,26%,31%)",
        toggleBg: "hsl(223, 31%, 20%)",
        screenBg: "hsl(224, 36%, 15%)",
        // Keys
        keyBgDarkBlue: " hsl(225, 21%, 49%)",
        keyShadowDrakBlue: "hsl(224, 28%, 35%)",
        hoverBlueKeyBg: "#a1b2e0",
        toggleBgRed: "hsl(6, 63%, 50%)",
        toggleBgDarkRed: "hsl(6, 70%, 34%)",
        hoverRedKeyBg: "#f96c5b",
        keyBgLightGrayish: "hsl(30, 25%, 89%)",
        keyShadowGrayoshOrange: "hsl(28, 16%, 65%)",
        // Text
        textDarkBlue: "hsl(221, 14%, 31%)",

        // Theme 2
        // Backgrounds
        lightGrayMainBg: " hsl(0, 0%, 90%)",
        grayishRed: "hsl(0, 5%, 81%)",
        lightGrayScreenBg: "hsl(0, 0%, 93%)",
        // Keys
        keyDarkModerateCyan: "hsl(185, 42%, 37%)",
        keyDarkCyan: "hsl(185, 58%, 25%)",
        keyOrange: " hsl(25, 98%, 40%)",
        keyDarkOrange: "hsl(25, 99%, 27%)",
        keyLightGrayishYellow: "hsl(45, 7%, 89%)",
        keyDarkGrayishOrange: "hsl(35, 11%, 61%)",
        // Text
        darkGrayishOrangeYellow: " hsl(60, 10%, 19%)",

       
      },
      fontFamily: {
        League: "League Spartan",
      },
      fontWeight: {
        large: "700",
      },
    },
  },
  plugins: [],
};
