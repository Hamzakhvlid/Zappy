

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        primary: "friz quadrata",
        porter: "Porter Sans Block"
      },

      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },



    },
  },
  plugins: [],
  
  // remove width and padding from all elements
  'root': {
    width: 'unset',
    padding: 'unset',
  },
};