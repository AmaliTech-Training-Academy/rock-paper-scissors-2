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
        'cello': "#1F3757",
        'haiti': "#131537",
        'number-cardcolor': "#F3F3F3",
        'cerulean':"#2A45C2",
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