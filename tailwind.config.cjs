/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'min': '374px', 'max': '767px'},
      'tablet': {'min': '768px', 'max': '1023px'},
      'laptop': {'min': '1024px'}
      // 'desktop': {'min': '1280px', 'max': '1535px'},
      // 'monitor': {'min': '1536px'}
    },
    extend: {
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif'],
        'barlowbold': ['Barlow Semi Condensed-Bold','sans-serif']
      }
    }
  },
  plugins: [
    plugin(function({addVariant,addUtilities}){
      addVariant("children", "&>*"),
      addUtilities({
        'bg-radial-gradient':{
          'rd-gradient': 'radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%)',
        }
      })
    })
  ]
}

// @layer utilities {
//   .content-auto {
//     content-visibility: auto;
//   }
// }