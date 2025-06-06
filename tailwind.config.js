/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
        dropShadow: {
        white: '0 0 10px rgba(255, 255, 255, 0.8)',
        }
      },
  },
  plugins: [],
};
