/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		fontFamily: {
			sans: ["Poppins", "sansserif"],
		},
		extend: {
			backgroundImage: {
				home: "url('/assets/imagens/bg.png')",
			},
		},
	},
	plugins: [],
};
