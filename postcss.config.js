const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');


module.exports = {
    plugins: [tailwindcss('apps/playground-client/tailwind.config.js'), autoprefixer],
};