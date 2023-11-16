module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-color': '#F9A51A',
      },
      backgroundImage: {
        'background-image': "url('./src/assets/Images/Rectangle 1.png')",
      },
    }
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      fontSize: ['hover'],
      textColor: ['group-hover'],
    }
  },
  daisyui: {
    themes : ['lofi']
  },
  plugins: [require('daisyui')],
}
