/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				num: ['Offside-Regular', 'ShareTechMono-Regular' ],
        title: ['Orbitron-VariableFont_wght'],
        primary: ['roboto'],
        martian: ['MartianMono-VariableFont_wdth', 'Orbitron-VariableFont_wght']
			},
		},
	},
	plugins: [],
};
