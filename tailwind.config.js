/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // 새로 추가한 1200px 커스텀 breakpoint
      'custom1200': {'min': '1200px'},
      
    }
  },
  plugins: [],
}
