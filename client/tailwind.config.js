/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#0f172a',
      'gray': '#7c7772',
      'gray-light': '#d3dce6',
      'white': '#FFFFFF',
      'black': '#0000',
      'green': '#56d71e',
      'ivory': '#FFFFF0',
      'red': '#FF0000',
      // 'brown': '#4D2D18',
      'brown': '#013220',
      // 'lightBrown': '#ab8c7e'
      // 'lightBrown': '#025839'
      'lightBrown': '#03925e'
      
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)'},
        to: {transform: 'translateX(-100%)'}
      }
    }
  },
  plugins: [],
}