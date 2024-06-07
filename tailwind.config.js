/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'form-pattern': "url('./src/assets/images/more/11.png')"
      },
      fontFamily: {
        Rancho: '"Rancho", cursive',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

