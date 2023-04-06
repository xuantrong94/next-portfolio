const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  // screen: {
  //   '2xl': { max: '1535px' },
  //   // => @media (max-width: 1535px) { ... }

  //   xl: { max: '1279px' },
  //   // => @media (max-width: 1279px) { ... }

  //   lg: { max: '1023px' },
  //   // => @media (max-width: 1023px) { ... }

  //   md: { max: '767px' },
  //   // => @media (max-width: 767px) { ... }

  //   sm: { max: '639px' },
  //   // => @media (max-width: 639px) { ... }

  //   xs: { max: '479px' },
  //   // => @media (max-width: 479px) { ... }
  // },
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      maxWidth: {
        xxs: '18rem',
      },
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#B63E96', // 240,86,199
        primaryDark: '#58E6D9', // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      backgroundImage: {
        circularLight:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)',
        circularDark:
          'repeating-radial-gradient(rgba(255,255,255,0.4) 2px,#1b1b1b 5px,#1b1b1b 40px)',
        circularLightMd:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)',
        circularDarkMd:
          'repeating-radial-gradient(rgba(255,255,255,0.4) 2px,#1b1b1b 5px,#1b1b1b 60px)',
        circularLightLg:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)',
        circularDarkLg:
          'repeating-radial-gradient(rgba(255,255,255,0.4) 2px,#1b1b1b 5px,#1b1b1b 80px)',
        circularLightXl:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)',
        circularDarkXl:
          'repeating-radial-gradient(rgba(255,255,255,0.4) 2px,#1b1b1b 5px,#1b1b1b 100px)',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
