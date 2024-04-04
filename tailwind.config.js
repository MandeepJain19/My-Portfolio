/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: "Aleo",
    },
    extend: {
      keyframes: {
        heroText: {
          "0%, 10% 100%": {
            // opacity: 0,
            backgroundPosition: "-33rem 0rem",
          },
          "65%, 85%": {
            // opacity: 1,
            backgroundPosition: "0 0",
          },
        },
        heroCursor: {
          "0%, 10% 100%": {
            width: 0,
          },
          "65%, 85%": {
            width: "100%",
            opacity: 1,
          },
          opacity: 0,
        },
      },
    },
  },
  extend: {
    height: {
      screen: "100dvh",
    },
    dropShadow: { "3xl": "0 0 25px rgba(0, 0, 0, 0.25)" },
  },
  plugins: [],
};
