const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

//插件实例
const clean_w_p = new CleanWebpackPlugin(["dist"]);
const extract_w_p = new ExtractTextPlugin({
  filename: "bundle.css",
  disable: false,
  allChunks: true
});
const copy_w_p = new CopyWebpackPlugin([
    { from: "./src/images", to: "./images" }
]);
const html_w_p = new HtmlWebpackPlugin({ template: "./src/index.html" });


module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{ loader: "babel-loader" }],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                    publicPath: "/dist"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [clean_w_p, extract_w_p, copy_w_p, html_w_p]
};
