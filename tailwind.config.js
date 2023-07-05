/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#5C5941",
        "gray-50": "#B6B39A",
        "gray-100": "#EDECE8",
        "primary-100": "#DFC22E",
        "primary-300": "#F8F1C2",
        "primary-500": "#FCF9E3",
        "secondary-100": "#EB5324",
        "secondary-300": "#F8CFC2",
        "secondary-500": "#FCEAE4",
        "dark-50": "#2F0F02",
        "light-50": "#f4f3e6",
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
