/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      backgroundImage: {
        'desktop': 'url("./images/bg-desktop.svg")',
        'mobile': 'url("./images/bg-mobile.svg")'
      },
      colors: {
        'violet': 'hsl(257, 40%, 49%)',
        'soft-magenta': 'hsl(300, 69%, 71%)'
      },
      fontSize: {
        '4.5xl': ['2.5rem', '3.5rem']
      }
    },
  },
  plugins: [],
}
