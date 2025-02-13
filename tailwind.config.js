/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure Tailwind scans your files
    theme: {
      extend: {
        keyframes: {
          borderSpin: {
            '100%': { transform: 'rotate(-360deg)' }
          }
        },
        animation: {
          'border-spin': 'borderSpin 7s linear infinite'
        }
      }
    },
    plugins: []
  };
  