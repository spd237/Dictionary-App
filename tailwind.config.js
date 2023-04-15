/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-text": "#2D2D2D",
        "dark-text": "#FFFFFF",
        "moderate-gray": "#757575",
        "strong-purple": "#8F19E8",
        "moderate-purple": "#A445ED",
        "input-light": "#F4F4F4",
        "input-dark": "#1F1F1F",
        "border-color": "#E9E9E9",
        "border-color-dark": "#3A3A3A",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Lora", "serif"],
        mono: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
