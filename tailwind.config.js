/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      'paragraph': '16px',
    },
    extend: {
      colors: {
        'primary': '#2E69FF',
      },
      fontFamily: {
        'font-primary': 'Exo, sans-serif',
      },
      gridTemplateColumns: {
        'hero-input': '1fr, max-content',
      }
    },
  },
  plugins: [],
}

