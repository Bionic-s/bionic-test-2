/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '24px',
				sm: '24px',
				md: '32px',
				lg: '48px',
			},
			screens: {
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
				'2xl': '1240px',
			},
		},
		extend: {
			colors: {
				// Bionic Solutions Brand Colors
				'bg-primary': '#0B0D10',
				'bg-secondary': '#1A1D23',
				'accent-primary': '#00BFFF',
				'accent-secondary': '#0099CC',
				'text-primary': '#FFFFFF',
				'text-muted': '#9AA4AF',
				success: '#00D4AA',
				warning: '#FFB800',
				error: '#FF4444',
			},
			fontFamily: {
				sans: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
			},
			fontSize: {
				// Desktop
				'h1': ['64px', { lineHeight: '68px', fontWeight: '700' }],
				'h2': ['44px', { lineHeight: '52px', fontWeight: '700' }],
				'h3': ['28px', { lineHeight: '36px', fontWeight: '600' }],
				'h4': ['20px', { lineHeight: '28px', fontWeight: '500' }],
				'body': ['18px', { lineHeight: '28px', fontWeight: '400' }],
				'small': ['16px', { lineHeight: '24px', fontWeight: '400' }],
				'tiny': ['14px', { lineHeight: '20px', fontWeight: '400' }],
			},
			spacing: {
				'xs': '4px',
				'sm': '8px',
				'md': '12px',
				'lg': '16px',
				'xl': '24px',
				'2xl': '32px',
				'3xl': '48px',
				'4xl': '64px',
				'5xl': '96px',
				'6xl': '128px',
			},
			borderRadius: {
				'small': '4px',
				'medium': '8px',
				'large': '12px',
				'xlarge': '16px',
			},
			boxShadow: {
				'button': '0 12px 24px rgba(0, 191, 255, 0.3)',
				'card': '0 20px 40px rgba(0, 191, 255, 0.15)',
				'small': '0 4px 8px rgba(0, 0, 0, 0.2)',
				'medium': '0 8px 16px rgba(0, 0, 0, 0.3)',
				'large': '0 16px 32px rgba(0, 0, 0, 0.3)',
				'xlarge': '0 20px 40px rgba(0, 0, 0, 0.4)',
			},
			transitionTimingFunction: {
				'ease-in-out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'ease-out': 'cubic-bezier(0.25, 1, 0.5, 1)',
				'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
				'sharp': 'cubic-bezier(0.4, 0, 0.6, 1)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
