/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // mobile: "375px",
        desktop: "1440px",
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "shorten-desktop-pattern": "url('/images/bg-shorten-desktop.svg')",
        "boost-desktop-pattern": "url('/images/bg-boost-desktop.svg')",
        "shorten-mobile-pattern": "url('/images/bg-shorten-mobile.svg')",
        "boost-mobile-pattern": "url('/images/bg-boost-mobile.svg')",
      },
      colors: {
        "plain-white": "#FFFFFF",
        "white-cream": "#EFF1F7",
        cyan: "hsl(180, 66%, 49%)",
        "light-cyan": "#9AE3E3",
        "dark-violet": "hsl(257, 27%, 26%)",
        violet: "hsl(256, 26%, 33%)",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        "grayish-violet": "hsl(257, 7%, 63%)",
        "very-dark-blue": "hsl(255, 11%, 22%)",
        "very-dark-violet": "hsl(260, 8%, 14%)",
        "footer-bg": "hsl(257, 8%, 14%)",
        "plain-black": "#000000",
      },
    },
  },
  plugins: [],
};
