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
      'white': '#ffffff',
      'black': '#000000',
      'green': '#56d71e',
      'ivory': '#FFFFF0',
      'red': '#FF0000', 
      'lightBrown':'#95785e',
      'brown': '#45382c',
      'yellow': '#FFEA00'
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },

      backgroundImage: {
        'hero': "url('https://c7.alamy.com/comp/2BP0EWN/dubai-uae-may-13-2020-worlds-largest-shopping-center-empty-dubai-mall-during-quarantine-top-vew-2BP0EWN.jpg')",
        'hero2': "url('https://plus.unsplash.com/premium_photo-1661964205360-b0621b5a9366?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }
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