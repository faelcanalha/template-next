import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'website-primary': '#0E0D0F',
        'website-secondary': '#111012',
        'website-third': '#181719',
        'website-color': '#4B46AF',
        'website-text': '#505050'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animated'), nextui()]
};
export default config;
