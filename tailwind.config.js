/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand:  '#3D5AFE',
        brandDark: '#2C45E0',
        sun:    '#FFC629',
        sunDark:'#F3B70F',
        sky:    '#2DC7F4',
        coral:  '#FF3D5A',
        ink:    '#16161D',
        slatey: '#5B6275',
        mist:   '#F3F3F6',
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
        script: ['Yellowtail', 'cursive'],
      },
      boxShadow: {
        card: '0 18px 40px -18px rgba(22,22,29,0.22)',
        soft: '0 10px 30px -12px rgba(22,22,29,0.18)',
        btn:  '0 12px 22px -10px rgba(61,90,254,0.55)',
      },
      keyframes: {
        floaty:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        fadeUp:    { '0%': { opacity: '0', transform: 'translateY(28px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:    { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideLeft: { '0%': { opacity: '0', transform: 'translateX(32px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        popIn:     { '0%': { opacity: '0', transform: 'scale(0.82)' }, '65%': { opacity: '1', transform: 'scale(1.06)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        wiggle:    { '0%,100%': { transform: 'rotate(0deg)' }, '20%': { transform: 'rotate(-8deg)' }, '60%': { transform: 'rotate(8deg)' } },
        shimmer:   { '0%': { transform: 'translateX(-100%) skewX(-15deg)' }, '100%': { transform: 'translateX(400%) skewX(-15deg)' } },
        slideDown: { '0%': { opacity: '0', transform: 'translateY(-110%)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        barFill:   { '0%': { width: '0%' }, '100%': { width: '100%' } },
      },
      animation: {
        floaty:    'floaty 6s ease-in-out infinite',
        fadeUp:    'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both',
        fadeIn:    'fadeIn 0.3s ease both',
        slideLeft: 'slideLeft 0.55s cubic-bezier(0.22,1,0.36,1) both',
        popIn:     'popIn 0.5s cubic-bezier(0.22,1,0.36,1) both',
        wiggle:    'wiggle 0.45s ease-in-out',
        shimmer:   'shimmer 0.75s ease forwards',
        slideDown: 'slideDown 0.55s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
}
