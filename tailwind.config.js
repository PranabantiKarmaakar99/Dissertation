
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      farsan: ['Farsan', 'cursive'],
      dancing:['"Dancing Script"','cursive'],
    },
    extend: {},
  },
  plugins: [],
};
