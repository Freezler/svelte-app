/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			
			animation: {
				btnPulse: ' btnPulse 1s infinite',
				'spin-slow': 'spin 3s linear infinite',
				'spin-fast': 'spin 1s linear infinite',
				'slow-fade-in': 'fade-in 0.7s ease-in-out',
				'fast-fade-in': 'fade-in 0.5s ease-in-out',
				'slow-fade-out': 'fade-out 0.5s ease-in-out',
				'fast-fade-out': 'fade-out 0.7s ease-in-out',
				'slow-slide-in': 'slide-in 0.6s ease-in-out',
				'fast-slide-in': 'slide-in 3s ease-in-out',
				'slow-slide-up': 'slide-up 0.6s cubic-bezier(0.215, 0.61, 0.355, 1)',
				'slow-slide-out': 'slide-out 0.6s ease-in-out',
				'fast-slide-out': 'slide-out 0.3s ease-in-out',
				'ani-translate-y': 'translate-y 5s ease-in-out',
				'fast-slide-up': 'slide-up 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)',
				'slow-slide-down': 'slide-down 0.6s cubic-bezier(0.215, 0.61, 0.355, 1)',
				'burger-smooth': 'burger-smooth 2s ease-in-out',
			    'wave': 'wave .9s ease-in-out',
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
					'0%': { transform: 'translateX(-240px)' },
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
					'50%': { transform: 'rotate(35deg)' },
					'100%': { transform: 'rotate-45deg)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(240px)' },
					'100%': { transform: 'translateY(0)' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-400px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				'btnPulse': {
					'0%': { transform: 'scale(1))' },
					'50%': { transform: 'scale(0.9)' },
					'100%': { transform: 'scale(1)' }
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
					50: '#e6f5ff',
					100: '#d2ecff',
					200: '#aedaff',
					300: '#7dbfff',
					400: '#4b94ff',
					500: '#2268ff',
					600: '#003bff',
					700: '#003fff',
					800: '#0035d7',
					900: '#0830a7',
					950: '#072383'
				},
				bluetwo: {
					50: '#f3f6fb',
					100: '#e4e9f5',
					200: '#d0daed',
					300: '#afc2e1',
					400: '#89a2d1',
					500: '#6c85c5',
					600: '#596db7',
					700: '#4e5da7',
					800: '#454e8a',
					900: '#3b436d',
					950: '#272b44'
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
				purpleone: {
					50: '#edf0ff',
					100: '#dfe2ff',
					200: '#c5caff',
					300: '#a2a7ff',
					400: '#7f7cfd',
					500: '#6d5ef6',
					600: '#5e40eb',
					700: '#5d41d3',
					800: '#412ca7',
					900: '#382b84',
					950: '#22194d'
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
				purplethree: {
					50: '#faf5ff',
					100: '#f3e8ff',
					200: '#ead4ff',
					300: '#d9b3ff',
					400: '#c282fe',
					500: '#aa53f9',
					600: '#9530ed',
					700: '#801fd1',
					800: '#6d1faa',
					900: '#591a89',
					950: '#4b077e'
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
				},
				redone: {
					50: '#fff0f0',
					100: '#ffdede',
					200: '#ffc2c2',
					300: '#ff9898',
					400: '#ff5d5d',
					500: '#ff2b2b',
					600: '#f70808',
					700: '#d00505',
					800: '#ac0808',
					900: '#8e0e0e',
					950: '#4e0101'
				},
				redtwo: {
					50: '#fcf4f4',
					100: '#fae6e6',
					200: '#f7d1d1',
					300: '#f0b1b1',
					400: '#e58484',
					500: '#d75c5c',
					600: '#be3c3c',
					700: '#a33232',
					800: '#872d2d',
					900: '#712b2b',
					950: '#3d1212'
				},
				greyone: {
					50: '#f6f6f6',
					100: '#e7e7e7',
					200: '#d1d1d1',
					300: '#b0b0b0',
					400: '#888888',
					500: '#6d6d6d',
					600: '#5d5d5d',
					700: '#4f4f4f',
					800: '#454545',
					900: '#3d3d3d',
					950: '#050505'
				},
				greytwo: {
					50: '#f4f5fa',
					100: '#e7e9f2',
					200: '#d4d7e9',
					300: '#b6bcda',
					400: '#939bc7',
					500: '#797fb8',
					600: '#6769a9',
					700: '#5c5b9a',
					800: '#504e7f',
					900: '#444266',
					950: '#232232'
				},
				gradient: {
					primary: {
						start: 'redone',
						end: '#382b84'
					},
					secondary: {
						start: '#5e40eb',
						end: '#412ca7'
				}
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

		fonts: {
			sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
			serif: ['Georgia', 'serif'],
			mono: ['Bebas Neue','Monaco', 'Courier New', 'monospace'],
			display: ['San-francisco', 'sans-serif'],
			handwriting: ['Pacifico', 'cursive']
		},
		textShadow: {
			sm: '0 1px 2px var(--tw-shadow-color)',
			DEFAULT: '0 2px 4px var(--tw-shadow-color)',
			lg: '0 8px 16px var(--tw-shadow-color)'
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

