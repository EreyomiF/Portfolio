/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Example of adding a custom small screen size
        // ... other custom breakpoints
      },

    },
  },
  plugins: [],
}

