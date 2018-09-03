const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const mqpacker = require("css-mqpacker");
const precss = require("precss");
const autoprefixer = require("autoprefixer");
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
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  resolve: {
    modulesDirectories: ["node_modules", "./src"], // import时到哪些地方去寻找模块
    extensions: ["", ".js", ".jsx"], // require的时候可以直接使用require('file')，不用require('file.js')
    alias: {} //别名
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
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
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [precss(), autoprefixer(), mqpacker()]
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [clean_w_p, extract_w_p, copy_w_p, html_w_p]
};
