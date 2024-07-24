/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.6rem'
      }
    }
  },
  plugins: [
    daisyui
  ]
}

