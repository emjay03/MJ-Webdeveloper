/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
        'color1':'#000000',
        'color2':'#CC141C',
        'color3':'#FCD500',
        'color4':'#ffff',
        'color5':'#121617',
        'color6':'#adadad',
        'color7':'#0e0d0d'
        
    },
    fontFamily:{
      sans:["Work Sans"," sans-serif"],
      archivo:["Archivo", "sans-serif"], 

    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      

      
      // => @media (min-width: 1536px) { ... }
      'gm': {'max': '580px'},
      'gf': {'max': '440px'},
      'bf': {'min': '440px'},
      'rd': {'max': '975px'},
      'fd': {'max': '767px'},
      'ki': {'min': '1057px'},
      'ff': {'max': '1041px'},
      'kg': {'max': '1120px'},
      'hb': {'min': '1112px'},
      'hv': {'min': '830px'},
      
      'cd': {'min': '734px', 'max': '871px'},
      'xr': {'min': '580px', 'max': '733px'},
     
      'rt': {'min': '871px', 'max': '1023px'},
      'it': {'min': '746px', 'max': '1023px'},
      'pp': {'min': '767px', 'max': '1095px'},
      'ss': {'min': '1024px', 'max': '1111px'}
      
    },
    extend: {
      animation: {
        'wave': 'wave 1s linear infinite',
      },
      
    },
  },
  plugins: [],
}