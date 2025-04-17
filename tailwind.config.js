/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xsm': '375px',
        xsm: '425px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
      fontFamily: {
        vazirmatn: ['Vazirmatn', 'Arial', 'sans-serif'],
      },
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#1C2434',
        'black-2': '#010101',
        primary: '#3C50E0',
        'primary-light': '#5063F6',
        secondary: '#80CAEE',
        'secondary-light': '#9BDCFD',
        stroke: '#E2E8F0',
        graydark: '#333A48',
        meta: '#8597A3',
        body: '#637381',
        bodydark: '#AEB7C0',
        bodydark1: '#DEE4EE',
        bodydark2: '#8A99AF',
        danger: '#FF5470',
        success: '#219653',
        warning: '#FFA70B',
        info: '#2CCCE4',
        boxdark: '#24303F',
        'boxdark-2': '#1A222C',
      },
      boxShadow: {
        default: '0px 1px 3px rgba(0, 0, 0, 0.08)',
        1: '0px 1px 4px rgba(0, 0, 0, 0.12)',
        2: '0px 1px 5px rgba(0, 0, 0, 0.14)',
        3: '0px 2px 10px rgba(0, 0, 0, 0.08)',
        4: '0px 4px 14px rgba(0, 0, 0, 0.16)',
        5: '0px 0px 20px rgba(0, 0, 0, 0.06)',
        sidebar: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        scaling: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        scaling: 'scaling 2s ease infinite',
      },
      zIndex: {
        999: '999',
        9999: '9999',
      },
    },
  },
  darkMode: 'class',
}; 