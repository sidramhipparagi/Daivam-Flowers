
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['AfacadFlux', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'xs': ['0.875rem', { lineHeight: '1.5' }],      // 14px -> 14px (minimal increase)
				'sm': ['1rem', { lineHeight: '1.5' }],          // 14px -> 16px
				'base': ['1.125rem', { lineHeight: '1.75' }],    // 16px -> 18px
				'lg': ['1.25rem', { lineHeight: '1.75' }],      // 18px -> 20px
				'xl': ['1.5rem', { lineHeight: '2' }],           // 20px -> 24px
				'2xl': ['2rem', { lineHeight: '2.25' }],         // 24px -> 32px
				'3xl': ['2.5rem', { lineHeight: '2.5' }],        // 30px -> 40px
				'4xl': ['3rem', { lineHeight: '1.1' }],          // 36px -> 48px
				'5xl': ['3.75rem', { lineHeight: '1.1' }],       // 48px -> 60px
				'6xl': ['4.5rem', { lineHeight: '1.1' }],        // 60px -> 72px
			},
			colors: {
				brand: {
					primary: 'hsl(var(--brand-primary))',
					accent: 'hsl(var(--brand-accent))',
					background: 'hsl(var(--brand-background))',
					foreground: 'hsl(var(--brand-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
