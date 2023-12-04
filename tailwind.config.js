import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
        "pink-gradient":
          "radial-gradient(circle at 40% 60%, #ff61ad, #ff61ad, #ffcfea);",
        "blue-gradient":
          "radial-gradient(circle at 50% 50%, #fff, #f5f5f5, #1E4878);",
        separator:
          "linear-gradient(90deg, #FF61AD 0%, rgba(255, 97, 173, 0.18) 51.04%, #FF61AD 100%);",
      },
      screens: {
        xs: "420px",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar"), nextui()],
};
