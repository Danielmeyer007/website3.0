/** @type {import('tailwindcss').Config} */
exmodule.exports =  {
  content: [  "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",'./src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: { extend: {
    fontFamily: {
      geist: "var(--font-geist-sans)", // 🔥 Asegúrate de que coincida con la variable CSS
      mono: "var(--font-geist-mono)",
    },
  },
},
  plugins: [
    import('@tailwindcss/forms'),
    import('@tailwindcss/typography'),
    import('@tailwindcss/aspect-ratio'),
    import('@tailwindcss/line-clamp'),
  ],
};