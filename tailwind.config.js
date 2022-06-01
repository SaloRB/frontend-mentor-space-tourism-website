module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Bellefair', 'serif'],
        subtitle: ['Barlow Condensed', 'serif'],
        body: ['Barlow', 'serif'],
      },
      colors: {
        primary: '#D0D6F9',
      },
    },
  },
  plugins: [],
}
