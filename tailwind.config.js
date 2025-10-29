/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-[#4CAF50]",
    "text-[#F44336]",
    "text-[#FFC107]",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003F51",
        accent: "#0F6C6E",
        muted: "#F3F5F6",
      },
    },
  },
  plugins: [],
};
