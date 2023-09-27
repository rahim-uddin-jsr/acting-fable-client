/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4338CA",
        "orange-1": "#f8a70d",
      },
    },
  },
  plugins: [require("daisyui")],
};
