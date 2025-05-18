/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',  // Example of adding a custom small screen size
        // ... other custom breakpoints
        '3xl': '3000px', // Your custom breakpoint for 3000px and up
      },

    },
  },
  plugins: [],
}

