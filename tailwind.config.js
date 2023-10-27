/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'spin-reverse': {
          '100%': {
            transform: 'rotate(-360deg)',
          }
        }
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'spin-reverse' : 'spin-reverse 5s linear infinite'
      },
    }
  },
  plugins: [],
}

