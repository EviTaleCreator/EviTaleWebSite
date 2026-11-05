/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        parchment: '#FAF7F2',
        wood: '#1D2520',
        terracotta: '#D96B43',
        forest: '#162D23',
        softbg: '#EFE9DF',
        softborder: '#DED7CB'
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
