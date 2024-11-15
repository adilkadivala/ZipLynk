/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: `class`,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#66cc00",
        secondry: "#ccff99",
        greenDark: "#43123c",
      },
      backgroundImage: {
        hero_background: "url('background.svg')",
      },
    },
  },
  plugins: [],
};
