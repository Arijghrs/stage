/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Colorblue: '#5F9AF4',
        Colorgreen: '#01B58B' ,
        Coloryellow: '#FFBE46',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
        smbold: 500,
      },
      fontSize: {
        'xxs': '0.6rem',
      },
    },
  },
  plugins: [],
}

