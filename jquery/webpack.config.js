const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

//插件实例

const html_w_p = new HtmlWebpackPlugin({ template: "./src/index.html" });
const clean_w_p = new CleanWebpackPlugin(["dist"]);


module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }],
        query: {
          presets: ["es2015"]
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [clean_w_p, html_w_p]
};
