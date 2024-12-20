/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",  // Add Flowbite React components
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",        // Add Flowbite's styles
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // This is the correct Flowbite plugin
  ],
};
