/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3C50E0',
        secondary: '#80CAEE',
        boxdark: '#24303F',
        white: '#FFFFFF',
        black: '#1C2434',
        'black-2': '#010101',
        'primary-light': '#5063F6',
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
        'boxdark-2': '#1A222C',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}; 