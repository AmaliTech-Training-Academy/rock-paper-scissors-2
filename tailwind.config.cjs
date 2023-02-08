/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '374px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'}
      // => @media (min-width: 1536px) { ... }
    },
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