/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        cello: "#1F3757",
        haiti: "#131537",
        cardcolor: "#F3F3F3",
        cerulean:"#2A45C2",
        'number-color': "#565468"  ,
        'paper-outercircle': "#4664F4",
        'paper-shadow': "#2A45C2",
        'paper-innershadow': "#BABFD4",
        'paper-innercircle': "#DADADA"
      },
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif'],
        'barlowbold': ['Barlow Semi Condensed-Bold','sans-serif']
      }
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant("children", "&>*")
    })
  ]
}

// plugin(function({addVariant}){
//   addVariant("children", "&>*")
// })