/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [
    daisyui,
  ],
}