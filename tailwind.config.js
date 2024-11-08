/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      screens: {
        'mobile-l': '425px', // Add a custom breakpoint for larger mobile screens
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '1px #DCDDDE',
        },
        '.text-stroke-lg': {
          '-webkit-text-stroke': '1px grey',
        },
      });
    },
  ],
}
