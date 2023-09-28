/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				'burger-toggle': 'burger-toggle 0.6s ease-in-out',
				'spin-slow': 'spin 3s linear infinite',
				'spin-fast': 'spin 1s linear infinite',
				'slow-fade-in': 'fade-in 3s ease-in-out',
				'fast-fade-in': 'fade-in 0.5s ease-in-out',
				'slow-fade-out': 'fade-out 1s ease-in-out',
				'fast-fade-out': 'fade-out 0.5s ease-in-out',
				'slow-slide-in': 'slide-in 2.3s ease-in-out',
				'fast-slide-in': 'slide-in 0.9s cubic-bezier(0.215, 0.91, 0.655, 1)',
				'slow-slide-up': 'slide-up 2.3s cubic-bezier(0.215, 0.61, 0.355, 1)',
				'slow-slide-out': 'slide-out 1s ease-in-out',
				'fast-slide-out': 'slide-out 0.5s ease-in-out',
				'ani-translate-y': 'translate-y 5s ease-in-out',
				wave: 'wave 5s ease-in-out',
				'fast-slide-up': 'slide-up 1.6s cubic-bezier(0.215, 0.61, 0.355, 1)',
				'slow-slide-down': 'slide-down 1.6s cubic-bezier(0.215, 0.61, 0.355, 1)',
				burgerSmooth: 'burgerSmooth 2s ease-in-out'
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
					'50%': { transform: 'rotate(90deg)' },
					'100%': { transform: 'rotate(0deg)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-400px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				burgerSmooth: {
					transition: 'all 2s ease-in-out'
				}
			},
			sans: ['San Francisco', 'Inter', 'Arial', 'Helvetica', 'sans-serif']
		},
		colors: {
			black100: '#d3d3d4',
			black200: '#a6a6a9',
			black300: '#7a7a7f',
			black400: '#4d4d54',
			black500: '#212129',
			black600: '#1a1a21',
			black700: '#141419',
			black800: '#0d0d10',
			black900: '#070708',
			pureBlackBg: 'hsla(0, 0%, 0%, 1)',
			offBlackBg: 'hsla(0, 0%, 5%, 1)',
			darkGraybg: 'hsla(0, 0%, 15%, 1)',
			veryDarkGrayBg: 'hsla(0, 0%, 10%, 1)',
			tintRedBg: 'hsla(30, 10%, 10%, 1.0)',
			tintBlueBg: 'hsla(240, 10%, 10%, 1.0)',
			tintYellowBg: 'hsla(60, 10%, 10%, 1.0)',
			tintGreenBg: 'hsla(120, 10%, 10%, 1.0)',
			tintPurpleBg: 'hsla(270, 10%, 10%, 1.0)',
			tintPinkBg: 'hsla(330, 10%, 10%, 1.0)',
			tintCyanBg: 'hsla(180, 10%, 10%, 1.0)',
			tintMagentaBg: 'hsla(300, 10%, 10%, 1.0)',
			tintOrangeBg: 'hsla(30, 10%, 10%, 1.0)',
			primary: 'hsla(0, 0%, 00%, 0.1)', // Add your primary color
			secondary: '#ff6b6b', // Add your secondary color
			pcolor: '#6c757d',
			h1color: '#212529',
			background: 'hsla(223, 93%, 50%, 0.5)',
			darkgradientbg: 'linear-gradient(135deg, #111 0%, #fff 100%)'


			// Add more custom colors as needed
		},
		screens: {
			sxs: '320px', // Super Extra small screen size
			xs: '480px', // Extra small screen size
			sm: '640px', // Small screen size
			md: '768px', // Medium screen size
			lg: '1024px', // Large screen size
			xl: '1280px' // Extra large screen size
			// You can define additional screen sizes
		},
		padding: {
			2: '0.5rem', // Custom padding 0.5rem
			4: '1rem', // Custom padding 1rem
			6: '1.5rem' // Custom padding 1.5rem
			// Add more custom padding options as needed
		},

		fonts: {
			sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
			serif: ['Georgia', 'serif'],
			mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
			display: ['San-francisco', 'sans-serif'],
			handwriting: ['Pacifico', 'cursive']
		}
	},
	plugins: []

module.exports = {
	mode: 'jit'
	// ...
};
}
