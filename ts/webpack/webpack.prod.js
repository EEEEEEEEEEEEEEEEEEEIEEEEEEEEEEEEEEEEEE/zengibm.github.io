const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = require("./webpack.config.js");

const clean_w_p = new CleanWebpackPlugin(["../public"]);
const copy_w_p = new CopyWebpackPlugin([
    {
        from: path.resolve(`${path.resolve(__dirname)}/../src/files`),
        to: path.resolve(`${path.resolve(__dirname)}/../public/files`)
    }
]);
const html_w_p = new HtmlWebpackPlugin({
    /**
     * https://webpack.docschina.org/plugins/html-webpack-plugin/
     */
    template: path.resolve(__dirname, "../views/index.html"),
    title: "<%- root %>",
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
config.plugins.unshift(clean_w_p);
config.plugins.push(copy_w_p, html_w_p);

const prodConfig = {
    mode: "production"
};

module.exports = Object.assign({}, config, prodConfig);
