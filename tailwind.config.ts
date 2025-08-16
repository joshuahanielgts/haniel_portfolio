
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
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
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
        },
        cyberpunk: {
          blue: '#00f0ff',
          purple: '#5f5eff',
          magenta: '#a726e8',
          dark: '#0d0221',
          darker: '#050a14',
          glow: 'rgba(0, 240, 255, 0.8)'
        },
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
        },
        'cyber-glitch': {
          '0%, 100%': { 
            clipPath: 'inset(50% 0 50% 0)' 
          },
          '10%': { 
            clipPath: 'inset(0 65% 65% 0)' 
          },
          '20%': { 
            clipPath: 'inset(65% 0 0 65%)' 
          },
          '30%': { 
            clipPath: 'inset(20% 65% 0 65%)' 
          },
          '40%': { 
            clipPath: 'inset(65% 65% 65% 0)' 
          },
          '50%': { 
            clipPath: 'inset(0 0 65% 65%)' 
          },
          '60%': { 
            clipPath: 'inset(65% 65% 0 0)' 
          },
          '70%': { 
            clipPath: 'inset(0 65% 0 65%)' 
          },
          '80%, 90%': { 
            clipPath: 'inset(65% 0 65% 65%)' 
          }
        },
        'neon-pulse': {
          '0%, 100%': { 
            opacity: 1,
            textShadow: '0 0 10px rgba(0, 240, 255, 0.8), 0 0 20px rgba(0, 240, 255, 0.5)'
          },
          '50%': { 
            opacity: 0.8,
            textShadow: '0 0 5px rgba(0, 240, 255, 0.5), 0 0 10px rgba(0, 240, 255, 0.3)'
          }
        },
        'electric-flow': {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 0%' },
          '100%': { backgroundPosition: '0% 0%' }
        },
        'scanner-line': {
          '0%, 100%': { 
            top: '-100%',
            opacity: 0
          },
          '10%, 90%': { 
            opacity: 0.8
          },
          '50%': { 
            top: '200%'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'cyber-glitch': 'cyber-glitch 0.8s ease-in-out infinite alternate-reverse',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'electric-flow': 'electric-flow 8s linear infinite',
        'scanner-line': 'scanner-line 6s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
