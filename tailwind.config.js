/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   Roboto: ['Roboto', 'sans-serif'],
      // },
      boxShadow: {
        form: '2px 2px 14px 0 rgb(56 56 56 / 14%)',
        dashCard: '0 0 14px 0 rgb(56 56 56 / 8%)',
      },
    },
  },
  plugins: [],
}
