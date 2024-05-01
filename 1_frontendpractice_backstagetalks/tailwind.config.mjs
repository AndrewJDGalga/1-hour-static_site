import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily : {
			'sans': ['Roboto', defaultTheme.fontFamily.sans]
		},
		colors : {
			white: '#fff',
			pink:{ 
				100: '#e568ac',
				200: '#ff608c'
			},
			black: {
				100:'#251d20',
				300: '#000'
			},
			cyan: '#00c1b5',
			orange: '#ff6519',
			yellow: '#ffbe00',
			blue: '#1d3fbb',
			red: '#E30512'
		},
		extend: {},
	},
	plugins: [],
}
