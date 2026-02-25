/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#13ec5b',
          50:  '#edfff3',
          100: '#d5ffe5',
          200: '#aeffcc',
          300: '#70ffa5',
          400: '#2bfd76',
          500: '#13ec5b',
          600: '#05b843',
          700: '#099038',
          800: '#0d7130',
          900: '#0d5d2a',
          950: '#003415',
        },
        'background-light': '#f6f8f6',
        'background-dark':  '#0c1a12',
        'surface-light':    '#ffffff',
        'surface-dark':     '#152019',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg:    '0.5rem',
        xl:    '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full:  '9999px',
      },
      boxShadow: {
        card:        '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-hover':'0 8px 25px -5px rgb(0 0 0 / 0.1), 0 4px 10px -6px rgb(0 0 0 / 0.06)',
        'glow':      '0 0 20px rgb(19 236 91 / 0.15)',
      },
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%':   { opacity: '0', maxHeight: '0' },
          '100%': { opacity: '1', maxHeight: '500px' },
        },
        'count-up': {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up':  'fade-in-up 0.6s ease-out forwards',
        'fade-in':     'fade-in 0.5s ease-out forwards',
        'slide-down':  'slide-down 0.3s ease-out forwards',
        'count-up':    'count-up 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
