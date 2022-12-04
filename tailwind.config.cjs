/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				'hero-img': "url('/src/assets/hero.jpeg')",
			},
		},
	},
	plugins: [],
};
