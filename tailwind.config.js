/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        quickland: ['Quicksand', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 243, 226, 1))',
      },
    },
  },
  plugins: [
    import('@tailwindcss/typography'),
  ],
}