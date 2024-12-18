/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'sans-serif']
      },
      colors: {
        'light-pink': '#F9F0FF',
        'grayish-purple': '#8C6991',
        'dark-purple': '#2F1533',
        purple: '#A346D1'
      },
      backgroundImage: {
        pattern: 'url(./images/background-pattern-desktop.svg)',
        'pattern-mobile': 'url(./images/background-pattern-mobile.svg)'
      },
      maxWidth: {
        card: '600px'
      },
      boxShadow: {
        card: '0 20px 40px 0 rgba(47, 21, 51, 0.1)'
      }
    },
  },
  plugins: [],
}

