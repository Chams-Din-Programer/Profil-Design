/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '3xs': '150px',
      // => @media (min-width: 150px) { ... }

      '2xs': '300px',
      // => @media (min-width: 300px) { ... }

      'xs': '460px',
      // => @media (min-width: 460px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }*/
    },
    fontFamily: {
      'cursive': ['cursive'],
      'monospace': ['monospace'],
      'nunito': ['nunito', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      backgroundImage:{
        'hero-image':'url("./components/assets/earth.jpg")',
        'face-image':'url("./components/assets/istockphoto-1347495868-612x612.jpg")',
        'face-rm':'url("./components/assets/fortune-vieyra-QIMjYJSFoXM-unsplash-removebg-preview.png")',
      },
    },
  },
  plugins: [],
}

