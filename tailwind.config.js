module.exports = { 
  purge: ["./css/tailwind.css", "index.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary-color': 'rgba(32, 33, 36, .1)',  
      },
      boxShadow :{
        shadowg: '0 1px 6px 0 rgb(32 33 36 / 28%)',
      },
      divideColor: ['group-hover']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}