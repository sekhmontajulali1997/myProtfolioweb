/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "440px",
        xxsm: "290px",
        xxxsm: "140px",
      },

      keyframes: {
        "shadow-ring": {
          "0%": {
            boxShadow: "0 0 0 rgba(255, 1, 79, 0.5)", // Initial color (with some opacity)
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(255, 1, 79, 0.9)", // Expanded shadow (with more opacity)
            transform: "scale(1.1)",
          },
          "100%": {
            boxShadow: "0 0 0 rgba(255, 1, 79, 0.9)", // Final color (same as initial)
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "shadow-ring": "shadow-ring 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
