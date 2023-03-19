module.exports = {
  content: [
    "./src/*.{html,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('flowbite/plugin')
  ],
};