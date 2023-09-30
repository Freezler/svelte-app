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
				AliceBlue: {'#F0F8FF',
				AntiqueWhite: '#FAEBD7',
				Aqua: '#00FFFF',
				Aquamarine: '#7FFFD4',
				Azure: '#F0FFFF',
				Beige: '#F5F5DC',
				Bisque: '#FFE4C4',
				Black: '#000000',
				BlanchedAlmond: '#FFEBCD',
				Blue: '#0000FF',
				BlueViolet: '#8A2BE2',
				Brown: '#A52A2A',
				BurlyWood: '#DEB887',
				CadetBlue: '#5F9EA0',
				Chartreuse: '#7FFF00',
				Chocolate: '#D2691E',
				Coral: '#FF7F50',
				CornflowerBlue: '#6495ED',
				Cornsilk: '#FFF8DC',
				Crimson: '#DC143C',
				Cyan: '#00FFFF',
				DarkBlue: '#00008B',
				DarkCyan: '#008B8B',
				DarkGoldenRod: '#B8860B',
				DarkGray: '#A9A9A9',
				DarkGrey: '#A9A9A9',
				DarkGreen: '#006400',
				DarkKhaki: '#BDB76B',
				DarkMagenta: '#8B008B',
				DarkOliveGreen: '#556B2F',
				DarkOrange: '#FF8C00',
				DarkOrchid: '#9932CC',
				DarkRed: '#8B0000',
				DarkSalmon: '#E9967A',
				DarkSeaGreen: '#8FBC8F',
				DarkSlateBlue: '#483D8B',
				DarkSlateGray: '#2F4F4F',
				DarkSlateGrey: '#2F4F4F',
				DarkTurquoise: '#00CED1',
				DarkViolet: '#9400D3',
				DeepPink: '#FF1493',
				DeepSkyBlue: '#00BFFF',
				DimGray: '#696969',
				DimGrey: '#696969',
				DodgerBlue: '#1E90FF',
				FireBrick: '#B22222',
				FloralWhite: '#FFFAF0',
				ForestGreen: '#228B22',
				Fuchsia: '#FF00FF',
				Gainsboro: '#DCDCDC',
				GhostWhite: '#F8F8FF',
				Gold: '#FFD700',
				GoldenRod: '#DAA520',
				Gray: '#808080',
				Grey: '#808080',
				Green: '#008000',
				GreenYellow: '#ADFF2F',
				HoneyDew: '#F0FFF0',
				HotPink: '#FF69B4',
				IndianRed: '#CD5C5C',
				Indigo: '#4B0082',
				Ivory: '#FFFFF0',
				Khaki: '#F0E68C',
				Lavender: '#E6E6FA',
				LavenderBlush: '#FFF0F5',
				LawnGreen: '#7CFC00',
				LemonChiffon: '#FFFACD',
				LightBlue: '#ADD8E6',
				LightCoral: '#F08080',
				LightCyan: '#E0FFFF',
				LightGoldenRodYellow: '#FAFAD2',
				LightGray: '#D3D3D3',
				LightGrey: '#D3D3D3',
				LightGreen: '#90EE90',
				LightPink: '#FFB6C1',
				LightSalmon: '#FFA07A',
				LightSeaGreen: '#20B2AA',
				LightSkyBlue: '#87CEFA',
				LightSlateGray: '#778899',
				LightSlateGrey: '#778899',
				LightSteelBlue: '#B0C4DE',
				LightYellow: '#FFFFE0',
				Lime: '#00FF00',
				LimeGreen: '#32CD32',
				Linen: '#FAF0E6',
				Magenta: '#FF00FF',
				Maroon: '#800000',
				MediumAquaMarine: '#66CDAA',
				MediumBlue: '#0000CD',
				MediumOrchid: '#BA55D3',
				MediumPurple: '#9370DB',
				MediumSeaGreen: '#3CB371',
				MediumSlateBlue: '#7B68EE',
				MediumSpringGreen: '#00FA9A',
				MediumTurquoise: '#48D1CC',
				MediumVioletRed: '#C71585',
				MidnightBlue: '#191970',
				MintCream: '#F5FFFA',
				MistyRose: '#FFE4E1',
				Moccasin: '#FFE4B5',
				NavajoWhite: '#FFDEAD',
				Navy: '#000080',
				OldLace: '#FDF5E6',
				Olive: '#808000',
				OliveDrab: '#6B8E23',
				Orange: '#FFA500',
				OrangeRed: '#FF4500',
				Orchid: '#DA70D6',
				PaleGoldenRod: '#EEE8AA',
				PaleGreen: '#98FB98',
				PaleTurquoise: '#AFEEEE',
				PaleVioletRed: '#DB7093',
				PapayaWhip: '#FFEFD5',
				PeachPuff: '#FFDAB9',
				Peru: '#CD853F',
				Pink: '#FFC0CB',
				Plum: '#DDA0DD',
				PowderBlue: '#B0E0E6',
				Purple: '#800080',
				RebeccaPurple: '#663399',
				Red: '#FF0000',
				RosyBrown: '#BC8F8F',
				RoyalBlue: '#4169E1',
				SaddleBrown: '#8B4513',
				Salmon: '#FA8072',
				SandyBrown: '#F4A460',
				SeaGreen: '#2E8B57',
				SeaShell: '#FFF5EE',
				Sienna: '#A0522D',
				Silver: '#C0C0C0',
				SkyBlue: '#87CEEB',
				SlateBlue: '#6A5ACD',
				SlateGray: '#708090',
				SlateGrey: '#708090',
				Snow: '#FFFAFA',
				SpringGreen: '#00FF7F',
				SteelBlue: '#4682B4',
				Tan: '#D2B48C',
				Teal: '#008080',
				Thistle: '#D8BFD8',
				Tomato: '#FF6347',
				Turquoise: '#40E0D0',
				Violet: '#EE82EE',
				Wheat: '#F5DEB3',
				White: '#FFFFFF',
				WhiteSmoke: '#F5F5F5',
				Yellow: '#FFFF00',
				YellowGreen: '#9ACD32'
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
