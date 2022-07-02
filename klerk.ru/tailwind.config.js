const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    'index.html',
    'socials.html',
    'messangers.html',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '375px', 'max': '1199px'},
      '3xl': {'min': '1200px', 'max': '1800px'},
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.switch': {
          'position': 'relative',
          'display': 'inline-block',
          'width': '48px',
          'height': '24px',
        },
        '.switch_small': {
          'position': 'relative',
          'display': 'inline-block',
          'width': '32px',
          'height': '16px',
        },
        '.switch input': {
          'opacity': '0',
          'width': '0',
          'height': '0',
        },
        '.switch_small input': {
          'opacity': '0',
          'width': '0',
          'height': '0',
        },
        '.slider': {
          'position': 'absolute',
          'cursor': 'pointer',
          'top': '0',
          'left': '0',
          'right': '0',
          'bottom': '0',
          'background-color': '#DCDCDC',
          'transition': '.4s',
        },
        '.slider:before': {
          'position': 'absolute',
          'height': '26px',
          'width': '26px',
          'left': '4px',
          'bottom': '4px',
          'background-color': '#FFFFFF',
          'transition': '.4s',
        },
        'input:checked + .slider': {
          'background-color': '#316FEE',
        },        
        'input:focus + .slider': {
          'box-shadow': '0 0 1px #316FEE',
        },        
        'input:checked + .slider:before': {
          'transform': 'translateX(26px)',
        },                
        '.slider.round': {
          'border-radius': '34px',
        },        
        '.slider.round:before': {
          'border-radius': '50%',
        },
      })
    }),
  ],
}
