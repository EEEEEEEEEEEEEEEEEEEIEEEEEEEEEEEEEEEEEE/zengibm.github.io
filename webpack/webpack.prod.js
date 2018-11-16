const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = require("./webpack.config.js");

const clean_w_p = new CleanWebpackPlugin(["../static/dist"]);
const copy_w_p = new CopyWebpackPlugin([
  {
    from: path.resolve(`${path.resolve(__dirname)}/../../src/files`),
    to: path.resolve(`${path.resolve(__dirname)}/../public/admin/files`)
  }
]);
const html_w_p = new HtmlWebpackPlugin({
  /**
   * https://webpack.docschina.org/plugins/html-webpack-plugin/
   */
  template: path.resolve(__dirname, "../views/react.html"),
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
});
config.plugins.push(clean_w_p, copy_w_p, html_w_p);

const prodConfig = {
  mode: "production",
  // output: {
  //   path: path.resolve(__dirname, "../public"),
  //   publicPath: "/public", //如果react-router 在多级路由下找不到css 或者js 资源的话配置这个可以解决
  //   filename: "bundle.js"
  // },
};

module.exports = Object.assign({}, config, prodConfig);
