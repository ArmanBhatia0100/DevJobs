/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "violet": "#5964E0",
        "light-violet": "#939BF4",
        "very-dark-blue": "#19202D",
        "midnight": "#121721",
        "white": "#ffffff",
        "light-Grey": "#ecebff",
        "dark-grey": "#6E8098",
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      backgroundImage: {
        "mobile-header": "url('../public/assets/mobile/bg-pattern-header.svg')",
      },
    },
  },
  plugins: [],
};
