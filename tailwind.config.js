/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        noto: ['Noto Serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        parimary: '#787878',
        secondary: '#8D2828',
        maroon: '#8D2828'
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0.4 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0.4 },
        },
        disappear: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(60px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        appear: "appear 5s infinite",
        disappear: "disappear 3s ease 0s 1 forwards",
        pulse: "pulse 3s infinite",
        pulse2: "pulse 5s infinite",
        pulse3: "pulse 7s 3s infinite",
        slideIn: "slideIn 1s ease-in forwards",
      },
    },
  },
  plugins: [],
}
