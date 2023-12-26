import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accentOnContainer: '#2F1204',
        accentOnContainerAlt: '#331405',
        dark: {
          50: '#E0DFDE',
          100: '#D6D5D4',
          200: '#C2C0BF',
          300: '#AFABAA',
          400: '#9B9795',
          500: '#878280',
          600: '#6A6665',
          700: '#4E4A49',
          800: '#312F2E',
          900: '#141313',
          950: '#050505'
        },
        light: {
          50: '#333232',
          100: '#4C4C4B',
          200: '#666564',
          300: '#807E7D',
          400: '#999796',
          500: '#B3B0AF',
          600: '#CCCAC8',
          700: '#E6E3E1',
          800: '#F2EFED',
          900: '#FFFCFA',
        },
        accent: {
          50: '#762e0a',
          100: '#8E370B',
          200: '#A5400D',
          300: '#BD490F',
          400: '#D45211',
          500: '#EC5B13',
          600: '#ee6b2b',
          700: '#f07c42',
          800: '#f28c5a',
          900: '#f49d71',
          950: '#f6ad89',
        },
      },
      fontFamily: {
        'display': ['var(--font-display)', 'ui-serif'],
        'body': ['var(--font-body)', 'ui-sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
}
export default config