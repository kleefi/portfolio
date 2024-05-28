/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center:true,
      padding:'24px'
    },
    extend: {
      colors:{
        primary:'#D77921',
        dark:'#1e293b'
      },
      screens:{
        '2xl':'1320px',
      },
      fontSize:{
        'text-3xl':'1.875rem'
      },
    },
  },
  plugins: [],
}

