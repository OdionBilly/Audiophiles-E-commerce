/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        mobile_hero_image:"url('./src/Bgimage/hero-desk.png')",
        tablet_hero_image:"url('./src/Bgimage/Bitmap-bg-Tablet')",
        'footer-texture' : "url('/img/footer-texture.png')",
      },
      fontFamily:{
        primaryextrabold:["ExtraBold"],
        primarybold:['Bold'],
        primarymedium:["Medium"],
        primaryregular:["Regular"],
        primarylight:["Light"],

      }
    },
  },
  plugins: [],
}

