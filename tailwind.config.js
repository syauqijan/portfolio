/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#0C0710',
        lightAccent: '#72838A',
        secondary: '#00E788',
        tertiary: '#1E79B6',
        // quaternary: '#FCBF2E',
        quaternary: '#00E788',

        darkBlue : '#314756',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      
      spacing: {
        '0': '0', // Set the default padding to 0
        // other spacing values...
      },
      transitionProperty: {
        'height': 'height',
      },
      transitionDuration: {
        '2000': '2000ms',
        '1500': '1500ms',


      }
    },
  },
  plugins: [],
}
