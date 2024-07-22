/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
          colors: {
              primary: '#0ea5e9',
              priPressed: '#095e84',
              secondary: '#f97316',
              destructive: '',
              text: '#ffffff',
              textDisabled: '',
              bgDisabled: '',
              borderDisabled: '',
          }
      },
  },
  plugins: [],
  darkMode : 'class'
};
