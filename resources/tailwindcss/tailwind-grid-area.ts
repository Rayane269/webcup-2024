export default {
  theme: {
    extend: {
      gridTemplateAreas: {
        'layout': [
          'header',
          'main',
        ],
      },
      gridTemplateColumns: {
        'layout': '100%',
      },
      gridTemplateRows: {
        'layout': '64px auto',
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ]
}