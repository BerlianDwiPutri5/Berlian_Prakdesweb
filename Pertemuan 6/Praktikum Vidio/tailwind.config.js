/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        skcolor:{
          DEFAULT:'#7b99b9',
          dark:'#517dad'
        }
      },
    },
    variants:{
      extend:{
        display: ['group-hover'],
        borderWidht: ['group-hover']
      }
    }
  },

  plugins: [],
}
