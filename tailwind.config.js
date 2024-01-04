import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      colors: {
        "light-blue": "#1E4878",
        "dark-blue": "#001833",
        "lighter-pink": "#FFEDF7",
        "light-pink": "#FFCFEA",
        "dark-pink": "#FF61AD",
        "text-pink": "#FFEDF7",
      },
      backgroundImage: {
        "hero-bg-desktop": 'url("/assets/home.png")',
        "hero-bg-mobile": 'url("/assets/home-mobile.png")',
        "bloodwork-bg-desktop": 'url("/assets/bloodwork.png")',
        "bloodwork-bg-mobile": 'url("/assets/bloodwork-mobile.png")',
        "inquiry-bg-desktop": 'url("/assets/inquiry-bg.png")',
        "inquiry-bg-mobile": 'url("/assets/inquiry-bg-mobile.png")',
        "pink-gradient":
          "radial-gradient(circle at 40% 60%, #ff61ad, #ff61ad, #ffcfea);",
        "blue-gradient":
          "radial-gradient(circle at 50% 50%, #fff, #f5f5f5, #1E4878);",
        "about-separator":
          "linear-gradient(90deg, #FF61AD 0%, rgba(255, 97, 173, 0.18) 51.04%, #FF61AD 100%);",
        "glute-separator": "linear-gradient(90deg, #FFF 0%, #FF61AD 105.28%);",
      },
      screens: {
        xs: "420px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
    nextui(),
  ],
};
