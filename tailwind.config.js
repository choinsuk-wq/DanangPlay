/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F2F7F4',
          100: '#E5EFE9',
          200: '#C3DBCF',
          600: '#236F54',
          700: '#1A5741',
          800: '#144534',
          900: '#0F382A',
          950: '#09231A',
        },
        gold: {
          50: '#FAF7EE',
          100: '#F4ECD4',
          200: '#EAD9A8',
          300: '#DFC278',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#B08C45',
          700: '#8E6E30',
          800: '#6D5322',
        },
        charcoal: {
          500: '#6B7684',
          600: '#4E5968',
          700: '#333D4B',
          800: '#222831',
          900: '#191F28',
          950: '#10141A',
        },
        cream: {
          50: '#FCFBF9',
          100: '#F7F6F2',
          200: '#ECEAE2',
        },
        primary: {
          50: '#F2F7F4',
          100: '#E5EFE9',
          200: '#C3DBCF',
          300: '#8EBFA8',
          400: '#4A9A7A',
          500: '#236F54',
          600: '#1A5741',
          700: '#144534',
          800: '#0F382A',
          900: '#09231A',
          950: '#05140F',
        },
        kakao: {
          bg: '#FEE500',
          text: '#191919',
          dark: '#3C1E1E'
        }
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'prestige': '0 12px 36px -8px rgba(15, 56, 42, 0.12), 0 4px 12px -2px rgba(15, 56, 42, 0.06)',
        'prestige-lg': '0 24px 50px -12px rgba(15, 56, 42, 0.2), 0 8px 24px -4px rgba(15, 56, 42, 0.08)',
        'gold-glow': '0 8px 25px -4px rgba(197, 160, 89, 0.35)',
        'premium': '0 20px 40px -15px rgba(15, 56, 42, 0.15)',
        'float': '0 10px 30px -5px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
