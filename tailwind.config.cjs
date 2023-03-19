const { fontFamily } = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
            colors:{
        font:"#eff3f3",
        darkfont:"#101e1d",
        dark100:"#272732",
        dark200:"#21212b",
        dark300:"#181820",
        darkform:"#101010",
        darkinput:"#171717",
        main100:"#75c987",
        main200:"#47c493",
        main300:"#43d4af",
        main400:"#1747a5"
      }
    },
     fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  plugins: [require("tailwindcss-animate"),require('tailwind-scrollbar')],
  
}
