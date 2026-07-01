/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050505',
        panel: '#0A0A0A',
        panel2: '#111111',
        filament: '#D4AF37',
        filament2: '#F3E5AB',
        brass: '#AA7E33',
        ivory: '#F9F6F0',
        smoke: '#9CA3AF',
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        body: ['"Outfit"', 'sans-serif'],
        hindi: ['"Hind"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(232, 182, 90, 0.35)',
        'glow-sm': '0 0 18px rgba(232, 182, 90, 0.45)',
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at center, rgba(232,182,90,0.18) 0%, rgba(10,9,8,0) 70%)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.55)' },
          '70%': { boxShadow: '0 0 0 14px rgba(37,211,102,0)' },
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.85 },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 2.4s infinite',
        flicker: 'flicker 3.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
