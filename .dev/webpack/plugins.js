const path = require('path'),
  fs = require('fs'),
  process = require('process'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  webpack = require('webpack'),
  __DEV__ = (process.env.NODE_ENV || 'development') === 'development';

exports.dev_plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    /**
     * https://webpack.docschina.org/plugins/html-webpack-plugin/
     */
    template: path.resolve(__dirname, '../public/index.html'),
    alwaysWriteToDisk: false,
    inject: true,
    hash: false
  })
  //   new webpack.LoaderOptionsPlugin({
  //     debug: true,
  //     minimize: false,
  //     options: {
  //       eslint: {
  //         configFile: path.join(__dirname, '../tools/.eslintrc')
  //       },
  //       context: '/'
  //     }
  //   }),
  // new webpack.DllReferencePlugin({
  //     manifest: path.join(__dirname, '../../public/dll', 'manifest.json'),
  // }),
];

exports.prod_plugins = [
  new CleanWebpackPlugin(
    ['css', 'js', 'files', 'index.html'],
    {
      root: path.join(process.cwd()),
      verbose: true
    }
  ),
  //   new webpack.optimize.CommonsChunkPlugin({
  //     names: ['vendor', 'manifest'],
  //     filename: 'vendor.bundle.js',
  //     minChunks: ({ resource }) =>
  //       resource &&
  //       resource.indexOf('node_modules') >= 0 &&
  //       resource.match(/\.(js|less|scss)$/)
  //   }),
  //   new webpack.optimize.ModuleConcatenationPlugin(),
  //   new webpack.LoaderOptionsPlugin({
  //     minimize: true,
  //     debug: false,
  //     quiet: true,
  //     options: {
  //       context: '/'
  //     }
  //   }),
  //   new ExtractTextPlugin({
  //     filename: '[name].style.[contenthash].css',
  //     disable: false,
  //     allChunks: true
  //   }),
  new ExtractTextPlugin({
    filename: 'css/bundle.css',
    disable: false,
    allChunks: true
  }),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.HashedModuleIdsPlugin(),
  //   new WebpackChunkHash(),
  new HtmlWebpackPlugin({
    /**
     * https://webpack.docschina.org/plugins/html-webpack-plugin/
     */
    template: path.resolve(__dirname, '../public/index.html'),
    alwaysWriteToDisk: false,
    inject: true,
    hash: false,
    minify: {
      collapseWhitespace: true,
      decodeEntities: true,
      html5: true,
      processConditionalComments: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeTagWhitespace: true,
      sortAttributes: true,
      sortClassName: true,
      useShortDoctype: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true
    }
  })
  //   new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
];
