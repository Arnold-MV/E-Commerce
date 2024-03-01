/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {},
    colors: {
      colorText: "#D9D9D9",
      colorIcon: "#C07A20",
      colorIconIdle: "#B0B0B0",
      colorBtn: "#E48826",
      colorBtnHover: "#F29926",
      colorDelete: "#B80000",
      colorDeleteHover: "#D70000",
    },
  },
  plugins: [],
};
