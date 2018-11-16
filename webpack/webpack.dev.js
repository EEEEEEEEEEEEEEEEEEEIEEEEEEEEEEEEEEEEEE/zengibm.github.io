const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./webpack.config.js");

const html_w_p = new HtmlWebpackPlugin({
  /**
   * https://webpack.docschina.org/plugins/html-webpack-plugin/
   */
  template: path.resolve(__dirname, '../views/index.html'),
  alwaysWriteToDisk: false,
  inject: true,
  hash: false,
  // minify: {
  //   collapseWhitespace: true,
  //   decodeEntities: true,
  //   html5: true,
  //   processConditionalComments: true,
  //   removeAttributeQuotes: true,
  //   removeComments: true,
  //   removeEmptyAttributes: true,
  //   removeOptionalTags: true,
  //   removeRedundantAttributes: true,
  //   removeScriptTypeAttributes: true,
  //   removeStyleLinkTypeAttributes: true,
  //   removeTagWhitespace: true,
  //   sortAttributes: true,
  //   sortClassName: true,
  //   useShortDoctype: true,
  //   keepClosingSlash: true,
  //   minifyJS: true,
  //   minifyCSS: true,
  //   minifyURLs: true
  // }
});

config.plugins.push(html_w_p);

const devConfig = {
  mode: "development",
  devServer: {
    //https://webpack.js.org/configuration/dev-server/#src/components/Sidebar/Sidebar.jsx
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: path.resolve(__dirname, "../public"),
    host: "localhost",
    compress: true, //gzip 亚索
    inline: true, //实时刷新
    port: 9999,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: true,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true
    }
    // proxy: {
    //   "/user/register": {
    //     target: "http://localhost:9998"
    //   }
    // }
  },

};

module.exports = Object.assign({}, config, devConfig);
