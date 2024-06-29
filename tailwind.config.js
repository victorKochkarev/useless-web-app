/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    themes: ["dark"],
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
}

