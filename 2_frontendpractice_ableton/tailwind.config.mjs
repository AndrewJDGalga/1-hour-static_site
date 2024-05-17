import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily:{
			'sans': ['futura-pt', defaultTheme.fontFamily.sans]
		},
		colors:{
			white:'white',
			grey: '#eee',
			black: 'black',
			orange: '#FF764D',
			yellow: '#FBFFA7',
			'blue-100': '#B1C5FF',
			'blue-200' : 'blue',
			green : '#B6FFC0',
			purple : '#D5B3FF'
		},
		extend: {
			backgroundImage : {
				'keys-img' : "url('/audio_switch.jpg')",
				'books-img' : "url('/training_books.jpg')"
			}
		},
	},
	plugins: [],
}
