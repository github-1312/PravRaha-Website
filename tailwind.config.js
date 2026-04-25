/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0b',
          elevated: '#111113',
          subtle: '#16161a',
        },
        border: {
          DEFAULT: '#1f1f24',
          strong: '#2a2a30',
        },
        text: {
          DEFAULT: '#ecebe3',
          muted: '#8a8a85',
          dim: '#575755',
        },
        accent: {
          DEFAULT: '#e8a84b',
          dim: '#8a6026',
        },
        signal: '#68a88a',
        danger: '#c97060',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['IBM Plex Sans', '-apple-system', 'sans-serif'],
        mono: ['IBM Plex Mono', 'SF Mono', 'monospace'],
      },
      maxWidth: {
        site: '1280px',
      },
      animation: {
        pulse: 'pulse 3s infinite',
        'pulse-fast': 'pulse 1s infinite',
        'pulse-med': 'pulse 1.8s infinite',
        flow: 'flow 10s linear infinite',
        'node-pulse': 'nodepulse 2.2s infinite',
        arrows: 'arrows 2s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
        flow: {
          to: { strokeDashoffset: '-70' },
        },
        nodepulse: {
          '0%': { r: '3', opacity: '0.8' },
          '100%': { r: '14', opacity: '0' },
        },
        arrows: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
