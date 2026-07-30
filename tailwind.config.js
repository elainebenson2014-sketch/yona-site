/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#0E2A22',   // deep canvas
        pine: '#123A2E',     // raised surface
        moss: '#1C4B3A',     // hover/borders
        gold: '#C9A227',     // single accent
        goldlt: '#E8D189',
        ivory: '#F5F1E6',    // primary text on dark
        sage: '#9FB3A5',     // muted text
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1120px' },
    },
  },
  plugins: [],
}
