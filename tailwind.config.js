/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        outstand: 'var(--color-outstand)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'background-primary': 'var(--color-background-primary)',
        'background-secondary': 'var(--color-background-secondary)',
        'progress-bar-background': 'var(--color-progress-bar-background)',
      },
    },
  },
  presets: [require('nativewind/preset')],
  plugins: [],
};
