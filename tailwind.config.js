module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /./
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
