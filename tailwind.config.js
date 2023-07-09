/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Ysabeau: "'Ysabeau SC', sans-serif",
        Poppins: "'Poppins', sans-serif",
        Bacasime: "'Bacasime Antique', serif",
        Rajdhani: "'Rajdhani', sans-serif",
      },
      boxShadow: {
        modi: "inset 4px 4px 6px -1px rgba(0,0,0,0.2),inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1),0.5px 0.5px 0px rgba(0,0,0,0.15),0px 12px 10px -10px rgba(0,0,0,0.05)]",
        modif: "6px 6px 10px -1px rgba(255,255,255,0.7),-6px -6px 10px -1px rgba(0,0,0,15)",
      },
      colors:{
        lightBg:"#f8c291",
        darkBg:"rgba(0,0,0,0.5)",
        primary:"rgba(0,0,0,0.9)",
        secondary:"rgba(255,255,255,0.25)",
        ternary:"rgba(0,0,0,0.25)",
        btn:"#b91c1c",
      },
    },
  },
  plugins: [],
};
