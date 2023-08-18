/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {


    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors:{
      primary:{
      Cyan:'hsl(179, 62%, 43%)',
      BrightYellow: 'hsl(71, 73%, 54%)'
  },
      Neutral:{
      LightGray: 'hsl(204, 43%, 93%)',
      GrayishBlue: 'hsl(218, 22%, 67%)',
      
  }
},
  fontFamily:{
          'karla':['Karla']
  },
  fontWeight:{
    bold:"800"
  },
    extend: {},
  },
  plugins: [],
}

