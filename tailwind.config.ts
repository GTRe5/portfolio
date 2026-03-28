import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      colors: {
        bg: '#080c10',
        surface: '#0d1117',
        panel: '#111820',
        border: '#1e2d3d',
        cyan: {
          DEFAULT: '#00e5ff',
          dim: '#00b8cc',
          glow: 'rgba(0,229,255,0.15)',
        },
        amber: {
          DEFAULT: '#ffb300',
          dim: '#cc8f00',
        },
        muted: '#4a6380',
        text: '#c9d8e8',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'blink': 'blink 1s step-end infinite',
        'scan': 'scan 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)`,
      },
    },
  },
  plugins: [],
}
export default config
