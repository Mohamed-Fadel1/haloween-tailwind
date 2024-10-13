/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors :{
        "primary-color" :"#DB6723",
        "secondary-color" :"#A0531E",
        "body-color" :"#100e0e",
        "container-color" :"#1A1A1A",
        "btn-color" :"#f7ea66"
      }
    },
    container : {
      center : true,
      padding :{
        DEFAULT : "20px",
        md :"100px"
      }
    }
  },
  plugins: [
  
    require('tailwind-scrollbar'),
],
}

