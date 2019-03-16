module.exports = {
    // parser: 'sugarss',
  plugins: [
    require('postcss-import'),
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie >= 11']
    }),
    require('css-mqpacker'),
    require('precss'),
    require('cssnano')
  ]
};
