/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#1E4878",
        "dark-blue": "#001833",
        "light-pink": "#FFCFEA",
        "dark-pink": "#FF61AD",
        "text-pink": "#FFEDF7",
      },
      backgroundImage: {
        "hero-bg-desktop": 'url("/assets/home.png")',
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
