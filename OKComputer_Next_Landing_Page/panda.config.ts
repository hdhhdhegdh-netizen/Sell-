import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#3b82f6' },
          'primary-dark': { value: '#1d4ed8' },
          accent: { value: '#8b5cf6' },
          'accent-light': { value: '#a78bfa' },
          background: { value: '#0f172a' },
          'background-light': { value: '#1e293b' },
          foreground: { value: '#f8fafc' },
          'foreground-muted': { value: '#94a3b8' },
          glass: { value: 'rgba(15, 23, 42, 0.8)' },
          'glass-border': { value: 'rgba(148, 163, 184, 0.1)' }
        },
        fonts: {
          sans: { value: 'var(--font-sans)' },
          serif: { value: 'var(--font-serif)' }
        },
        animations: {
          'fade-in': { value: 'fadeIn 0.5s ease-in-out' },
          'slide-up': { value: 'slideUp 0.6s ease-out' },
          'scale-in': { value: 'scaleIn 0.3s ease-out' }
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      }
    }
  },
  outdir: 'styled-system'
});