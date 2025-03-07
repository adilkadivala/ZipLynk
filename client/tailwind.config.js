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
        primary: "#57D131",
        secondry: "#ccff99",
        primaryText: "#406661",
        whitePrimary: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
