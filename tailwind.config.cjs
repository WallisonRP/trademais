/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,ts,tsx,js,jsx}"
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {

      fontFamily: {
        'audiowide': ['audiowide, sans-serif'],
      },

      backgroundImage: {
        'hero-pattern': "linear-gradient(135.32deg, #121212 47.89%, rgba(18, 18, 18, 0) 253.13%), url('./src/assets/images/hero-background.jpg')",
      },

      boxShadow: {
        'rectangle': '0px 2px 4px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
