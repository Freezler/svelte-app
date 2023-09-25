/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
        display: ['Oswald', 'sans-serif'],
        handwriting: ['Pacifico', 'cursive'],
      },
      colors: {
        primary: '#3490dc', // Add your primary color
        secondary: '#ff6b6b', // Add your secondary color
        pcolor: '#6c757d',
        h1color: '#212529',
        background: 'hsla(223, 93%, 50%, 0.5)',
        darkgradientbg: 'linear-gradient(135deg, #333 0%, #c3cfe2 100%)',

        gradient: 'linear-gradient(135deg, #f3f8 0%, #f9f9 100%)',
        conical: 'conical-gradient(#f5f7fa 0%, #c3cfe2 100%)',

        // Add more custom colors as needed
      },
      screens: {
        xs: '480px', // Extra small screen size
        sm: '640px', // Small screen size
        md: '768px', // Medium screen size
        lg: '1024px', // Large screen size
        xl: '1280px', // Extra large screen size
        // You can define additional screen sizes
      },
      padding: {
        '2': '0.5rem', // Custom padding 0.5rem
        '4': '1rem', // Custom padding 1rem
        '6': '1.5rem', // Custom padding 1.5rem
        // Add more custom padding options as needed
      },
      margin: {
        '2': '0.5rem', // Custom margin 0.5rem
        '4': '1rem', // Custom margin 1rem
        '6': '1.5rem', // Custom margin 1.5rem
        // Add more custom margin options as needed
      },
      fonts: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
        display: ['Oswald', 'sans-serif'],
        handwriting: ['Pacifico', 'cursive'],
      }
    },
  },
  plugins: [],
};
