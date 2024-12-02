/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'], // This sets 'DM Sans' as the default sans-serif font
      },
      fontSize: {
        '3xl': ['2rem', { lineHeight: '2.5rem' }], // Smaller screen font size
        '6xl': ['4rem', { lineHeight: '1.1' }], // Larger screen font size
      },
      opacity: {
        10: '0.1', // Additional opacity levels for fine control
      },
      zIndex: {
        '-1': '-1', // Enables layering of background video and overlay elements
      },
    },
  },
  plugins: [],
}
