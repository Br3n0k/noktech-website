/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF0000',
          dark: '#CC0000',
          light: '#FF3333',
          900: '#7F0000',
          800: '#990000',
          700: '#B30000',
          600: '#CC0000',
          500: '#FF0000',
          400: '#FF3333',
          300: '#FF6666'
        },
        dark: {
          DEFAULT: '#0A0A0A',
          light: '#121212',
          lighter: '#181818',
          card: '#1C1C1C',
          border: '#2A2A2A'
        },
        accent: {
          DEFAULT: '#FF3333',
          dark: '#CC0000'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': "url('/grid-pattern.svg')",
        'hero-gradient': 'linear-gradient(to bottom right, rgba(255, 0, 0, 0.1), rgba(0, 0, 0, 0.9))'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
} 