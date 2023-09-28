/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite',
				'spin-fast': 'spin 1s linear infinite',
				'slow-fade-in': 'fade-in 1s ease-in-out',
				'fast-fade-in': 'fade-in 0.5s ease-in-out',
				'slow-fade-out': 'fade-out 1s ease-in-out',
				'fast-fade-out': 'fade-out 0.5s ease-in-out',
				'slow-slide-in': 'slide-in 2.3s ease-in-out',
				'fast-slide-in': 'slide-in 0.9s cubic-bezier(0.215, 0.91, 0.655, 1)',
				'slow-slide-up': 'slide-up 2.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
				'slow-slide-out': 'slide-out 1s ease-in-out',
				'fast-slide-out': 'slide-out 0.5s ease-in-out',
				'ani-translate-y': 'translate-y 5s ease-in-out',
				'fast-slide-up': 'slide-up 1.6s cubic-bezier(0.215, 0.61, 0.355, 1)',
				'slow-slide-down': 'slide-down 1.6s cubic-bezier(0.215, 0.61, 0.355, 1)',
				'burger-smooth': 'burger-smooth 2s ease-in-out',
				wave: 'wave 5s ease-in-out'
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'translate-y': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-100%)' }
				},
				'wave': {
					'0%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(45deg)' },
					'50%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate-45deg)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-400px)' },
					'100%': { transform: 'translateY(0px)' }
				}
			},

			fontFamily: {
				sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
				serif: ['Georgia', 'serif'],
				mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
				display: ['Oswald', 'sans-serif'],
				handwriting: ['Pacifico', 'cursive']
			},
			colors: {
				primary: {
					50: '#2c3e50',
					100: '#d5d8dc',
					200: '#abb2b9',
					300: '#808b96',
					400: '#566573',
					500: '#2c3e50',
					600: '#233240',
					700: '#1a2530',
					800: '#121920',
					900: '#090c10',
					1000: '#EE7777',
					1100: '#33FF33',
					1200: '#333fff'
				},
				secondary: {
					50: '#e9ecef',
					100: '#dee2e6',
					200: '#ced4da',
					300: '#adb5bd',
					400: '#868e96',
					500: '#6c757d',
					600: '#5a6268',
					700: '#424b54',
					800: '#32383e',
					900: '#212529',
					1000: '#EEaa77',
					1100: '#53aF33'
				},
				tertiary: {
					50: '#f8f9fa',
					100: '#f1f3f5',
					200: '#e9ecef',
					300: '#dee2e6',
					400: '#ced4da',
					500: '#adb5bd',
					600: '#868e96',
					700: '#495057',
					800: '#495057',
					900: '#212529',
					1000: '#EE7777'
				},
				backgrounds: {
					50: '#f8f9fa',
					100: '#f1f3f5',
					200: '#e9ecef',
					300: '#dee2e6',
					400: '#ced4da',
					500: '#adb5bd',
					600: '#868e96',
					700: '#495057',
					800: '#343a40',
					900: '#212529',
					1000: '#EE7777'
				}
			},
			screens: {
				xxxs: '360px', // Extra extra extra small screen size
				xxs: '480px', // Extra extra small screen size
				xs: '640px', // Extra small screen size
				sm: '768px', // Small screen size
				md: '1024px', // Medium screen size
				lg: '1280px', // Large screen size
				xl: '1440px', // Extra large screen size
				xxl: '1920px', // Extra extra large screen size
				xxxl: '3840px' // 4K screen size (3840px)
				// Je kunt meer schermformaten toevoegen indien nodig
			  }
			  
			padding: {
				2: '0.5rem', // Custom padding 0.5rem
				4: '1rem', // Custom padding 1rem
				6: '1.5rem' // Custom padding 1.5rem
				// Add more custom padding options as needed
			},
			margin: {
				2: '0.5rem', // Custom margin 0.5rem
				4: '1rem', // Custom margin 1rem
				6: '1.5rem' // Custom margin 1.5rem
				// Add more custom margin options as needed
			},
			fonts: {
				sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
				serif: ['Georgia', 'serif'],
				mono: ['Monaco', 'Courier New', 'monospace'],
				display: ['San-francisco', 'sans-serif'],
				handwriting: ['Pacifico', 'cursive']
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)'
			}
		}
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value
					})
				},
				{ values: theme('textShadow') }
			);
		})
	]
};
