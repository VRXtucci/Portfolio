/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Viking: {
          50: '#edfefe',
          100: '#d1f9fc',
          200: '#a9f2f8',
          300: '#6ee7f2',
          400: '#1ecfe3',
          500: '#0fb5cb',
          600: '#1091aa',
          700: '#14758a',
          800: '#195f71',
          900: '#1a4e5f',
          950: '#0b3441',
        },
        BlueBayoux: {
          50: '#f5f8fa',
          100: '#e9eff5',
          200: '#cfdde8',
          300: '#a5c1d4',
          400: '#74a0bc',
          500: '#5384a4',
          600: '#406a89',
          700: '#35566f',
          800: '#2f495d',
          900: '#2b3f4f',
          950: '#1c2935',
        },
        PictonBlue: {
          50: '#f1f9fe',
          100: '#e2f2fc',
          200: '#bee5f9',
          300: '#85d0f4',
          400: '#44b7ec',
          500: '#1ea5e3',
          600: '#0e7fbb',
          700: '#0d6597',
          800: '#0f577d',
          900: '#124868',
          950: '#0c2e45',
        },
      },
      fontFamily: {
        BlackOpsOne: ['Black Ops One', 'sans-serif'],
        BebasNeue: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}