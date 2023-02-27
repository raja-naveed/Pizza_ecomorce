/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/src/Assets/home-banner-background.png')"
      }
    },
  },
  plugins: [],
}
