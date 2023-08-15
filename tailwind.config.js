/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
         'color-primary': '#23252B',
         'color-secudary': '#130F1A',
         'color-tertiary': '#FF944D',
      },
      width: {
         '128': '42rem',
      },
      maxWidth:{
         'tela': '70rem', 
      },
    },
  },
  plugins: [],
};
