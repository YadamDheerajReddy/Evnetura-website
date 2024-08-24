/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B2D42',  // Midnight Blue
        accent: '#EF476F',   // Coral Pink
        secondary: '#1C6DD0',// Sky Blue
        neutral: '#F5F5F5',  // Soft Gray
        dark: '#333333',     // Charcoal Gray
        light: '#D3D3D3',    // Light Gray
        highlight: '#FFD166' // Sunshine Yellow
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
