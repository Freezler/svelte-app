/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
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
				wave: {
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
				blueone: {
					50: '#eff7ff',
					100: '#dcecfd',
					200: '#c1defc',
					300: '#92c8fa',
					400: '#64acf6',
					500: '#408bf1',
					600: '#2a6ee6',
					700: '#2258d3',
					800: '#2249ab',
					900: '#214087',
					950: '#192952'
				},
				bluetwo: {
					50: '#f0f4fd',
					100: '#e4eafb',
					200: '#ced9f7',
					300: '#b1c0f0',
					400: '#919ee8',
					500: '#767fde',
					600: '#5c5dcf',
					700: '#4d4cb6',
					800: '#404093',
					900: '#393b76',
					950: '#16162d'
				},
				bluethree: {
					50: '#f2f6fc',
					100: '#e3ebf6',
					200: '#cdddf0',
					300: '#aac6e6',
					400: '#81a8d9',
					500: '#638cce',
					600: '#4f73c1',
					700: '#4561b0',
					800: '#3d5190',
					900: '#2c395f',
					950: '#242c47'
				},
				astral: {
					50: '#f0fafb',
					100: '#d9f0f4',
					200: '#b8e2e9',
					300: '#87ccd9',
					400: '#4fadc1',
					500: '#328ea3',
					600: '#2d768d',
					700: '#2b6173',
					800: '#2a5160',
					900: '#274452',
					950: '#152c37'
				},

				greenone: {
					50: '#f5ffe5',
					100: '#e6ffc7',
					200: '#cdff96',
					300: '#9ffc41',
					400: '#8bf328',
					500: '#6cd909',
					600: '#50ae02',
					700: '#3e8407',
					800: '#34680c',
					900: '#2c580f',
					950: '#143102'
				},

				greentwo: {
					50: '#f1fcf5',
					100: '#dff9e9',
					200: '#c0f2d4',
					300: '#8fe6b2',
					400: '#56d289',
					500: '#30b768',
					600: '#26aa5d',
					700: '#1e7743',
					800: '#1d5e39',
					900: '#194e31',
					950: '#082b19'
				},
				greenthree: {
					50: '#f2f7f4',
					100: '#dfece3',
					200: '#c1d9ca',
					300: '#98bda8',
					400: '#6b9c82',
					500: '#518a6e',
					600: '#37644f',
					700: '#2c5040',
					800: '#254035',
					900: '#1f352b',
					950: '#101e18'
				},

				roseone: {
					50: '#fef1fa',
					100: '#fde6f7',
					200: '#feccf1',
					300: '#fea3e4',
					400: '#fc6ad0',
					500: '#f74bbf',
					600: '#e61c9a',
					700: '#c90d7d',
					800: '#a60e66',
					900: '#8a1158',
					950: '#550232'
				},
				

				purpletwo: {
					50: '#fcf3ff',
					100: '#fae7ff',
					200: '#f3ceff',
					300: '#eea7ff',
					400: '#e473ff',
					500: '#d12ef6',
					600: '#bc1edb',
					700: '#9f15b6',
					800: '#841494',
					900: '#6f1679',
					950: '#490151'
				},

				rosetwo: {
					50: '#fef1f8',
					100: '#fee5f3',
					200: '#ffcae8',
					300: '#ff9fd4',
					400: '#ff64b5',
					500: '#fe1f8a',
					600: '#ef1372',
					700: '#d00657',
					800: '#ac0848',
					900: '#8f0c3f',
					950: '#580021'
				}
			},
			screens: {
				// default is oudere schermen erg klein!  -->
				xxxs: '360px', // modernere kleine schermen
				xxs: '480px', // Extra extra small screen size
				xs: '640px', // Extra small screen size
				sm: '768px', // Small screen size
				md: '1024px', // Medium screen size
				lg: '1280px', // Large screen size
				xl: '1440px', // Extra large screen size
				xxl: '1920px', // Extra extra large screen size
				xxxl: '3840px' // 4K screen size (3840px)
				// Je kunt meer schermformaten toevoegen indien nodig
			},

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
