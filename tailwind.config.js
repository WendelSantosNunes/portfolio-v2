/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
         'color-primary': '#23252B',
         'color-secudary': '#130F1A',
         'color-tertiary': '#FF944D',
         'color-border-1': '#0A66C2',
      },
      width: {
         '128': '42rem',
         'presetation': '57.25rem',
      },
      maxWidth:{
         'tela': '70rem', 
      },
      animation:{
         'presetation-home': '5s ease 2s infinite alternate none running icon_move_people'
      },
      keyframes: {
         icon_move_people:{
            '0%':{
               _webkit_transform: 'translate3d(0, 0, 0)',
               transform: 'translate3d(0, 0, 0)',
            },
            '100%': {
               _webkit_transform: 'translate3d(30px, 60px, 0)',
               transform: 'translate3d(-30px, -50px, 0)'
            }
         }
      }
    },
  },
  plugins: [],
};
