/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-deep':     '#0a0e1a',
        'bg-dark':     '#0f1525',
        'bg-mid':      '#1a2035',
        'bg-light':    '#f4f4f2',
        'bg-white':    '#ffffff',
        'accent-blue': '#1e90d4',
        'accent-cyan': '#00bcd4',
        'text-primary':   '#ffffff',
        'text-secondary': '#a8b3c8',
        'text-dark':      '#1a1a2e',
        'text-muted':     '#6b7a99',
        'border-subtle':  'rgba(255,255,255,0.08)',
        'red-accent':     '#e53935',
      },
      fontFamily: {
        display:  ['"Barlow Condensed"', 'sans-serif'],
        barlow:   ['"Barlow"', 'sans-serif'],
        body:     ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(2.5rem, 6vw, 5rem)',
        'model': 'clamp(2.5rem, 5vw, 4rem)',
        'eyebrow': '0.65rem',
      },
      letterSpacing: {
        'widest2': '0.15em',
        'widest3': '0.2em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        'card':    '0 4px 24px rgba(0,0,0,0.4)',
        'navbar':  '0 2px 20px rgba(0,0,0,0.6)',
        'deep':    '0 8px 40px rgba(0,0,0,0.6)',
      },
      backdropBlur: {
        'navbar': '12px',
      },
      transitionTimingFunction: {
        'power3': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
    },
  },
  plugins: [],
}
