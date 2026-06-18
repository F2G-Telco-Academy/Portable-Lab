/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E1E',
        muted: '#818293',
        accent: '#698D9C',
        dark: '#0F0F11',
        'nav-gradient-end': '#D6DEE6',
        'card-border': '#E5E5E5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'heading-xl': '-0.07em',
        'heading-lg': '-0.05em',
        'heading-md': '-0.05em',
        'heading-sm': '-0.03em',
        'nav': '0.02em',
        'label': '0.05em',
      },
    },
  },
  plugins: [],
}
