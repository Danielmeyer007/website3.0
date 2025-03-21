/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    import('@tailwindcss/forms'),
    import('@tailwindcss/typography'),
    import('@tailwindcss/aspect-ratio'),
    import('@tailwindcss/line-clamp'),
  ],
};