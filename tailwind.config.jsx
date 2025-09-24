module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',               // You can change this to any color you want
        'primary-foreground': '#ffffff',  // Usually a contrasting color for text
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-delay-3': 'fade-in 1s ease forwards 0.75s',
      },
    },
  },
  plugins: [],
}
