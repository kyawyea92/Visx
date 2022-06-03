const { border, borderBottom, borderColor } = require("@mui/system");

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        'dp' : '#9c27b0',
      },
      colors: {
        'code1': '#9c27b0',
      },
    },
    container : {
      center : true,
    }
  },
  plugins: [],
}
