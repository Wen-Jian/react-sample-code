/** @type {import('tailwindcss').Config} */
import path from 'path'

module.exports = {
    content: {
      relative: true,
      files: [
        "./src/**/*.{js,jsx,ts,tsx}",
        path.resolve(__dirname, "../../packages/ui-component/src/lib/**/*.tsx"),
      ],
    },
    theme: {
      extend: {},
    },
    plugins: [],
  };
  