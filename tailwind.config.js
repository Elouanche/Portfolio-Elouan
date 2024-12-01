/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#eaeaea',
      },
      backgroundImage: {
        'color-urban': 'linear-gradient(#9866A8, #E36F33)',
        'color-trans': 'linear-gradient(#A86500, #FFB342)',
        'color-prototype': 'linear-gradient(135deg, #0f2027, #2c5364, #203a43)',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          '-apple-system',
          'system-ui',
          'Segoe UI', 
          'Roboto', 
          'Ubuntu', 
          'sans-serif'
        ],
      },      
      lineHeight: {
        relaxed: '1.6',
      },
    },
  },
  plugins: [],
}
