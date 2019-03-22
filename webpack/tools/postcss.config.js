module.exports = {
    // parser: 'sugarss',
  plugins: [
    require('postcss-import'),
    require('autoprefixer')({
      browsers: ['last 2 versions', '> 2%']
    }),
    require('css-mqpacker'),
    require('precss'),
    require('cssnano')
  ]
};
