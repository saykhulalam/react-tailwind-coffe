/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter" , "sans-serif"],
        'play': ["Playfair Display" , "serif"],
        'plus': ["Plus Jakarta Sans" , "sans-serif"],
      },
      colors: {
        'common': '#6D1600',
        'madeblack': '#282A3A',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
};
