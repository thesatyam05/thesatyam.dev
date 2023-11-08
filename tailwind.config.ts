/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '2rem',
				screens: {
					'2xl': '1400px',
				},
			},
			textColor: {
				primary: 'var(--gray-12)',
				secondary: 'var(--gray-11)',
				tertiary: 'var(--gray-9)',
				brand: 'var(--brand)',
				link: 'var(--blue-10)',
			},
			backgroundColor: {
				primary: 'var(--gray-1)',
				secondary: 'var(--gray-4)',
				secondaryA: 'var(--gray-a4)',
				tertiary: 'var(--gray-3)',
			},
			borderColor: {
				primary: 'var(--gray-6)',
				secondary: 'var(--gray-4)',
			},
			ringOffsetColor: {
				primary: 'var(--gray-12)',
			},
			keyframes: {
				in: {
					'0%': { transform: 'translateY(18px)', opacity: 0 },
					'100%': { transform: 'translateY(0)', opacity: 1 },
				},
				'in-reverse': {
					'0%': { transform: 'translateY(-18px)', opacity: 0 },
					'100%': { transform: 'translateY(0px)', opacity: 1 },
				},
			},
			animation: {
				in: 'in .6s both',
				'in-reverse': 'in-reverse .6s both',
			},
		},
	},
	plugins: [],
};
