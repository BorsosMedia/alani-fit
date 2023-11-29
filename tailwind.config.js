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
        "inquiry-bg-desktop": 'url("/assets/inquiry-bg.png")',
        "bloodwork-bg-desktop": 'url("/assets/bloodwork.png")',
        "radial-gradient":
          "radial-gradient(circle at 65% 30%, #fff, #ffcfea, #ff61ad);",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar"), nextui()],
};
