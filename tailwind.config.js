/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './app/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './layouts/**/*.{ts,tsx}',
      './screens/**/*.{ts,tsx}',
      './configs/theme.ts',
   ],
   presets: [require('nativewind/preset')],
   darkMode: 'class',
   theme: {
      extend: {},
   },
   plugins: [],
};
