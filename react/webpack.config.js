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
  devServer: {
    contentBase: "./",
    host: "localhost",
    compress: true,
    port: 3888
  },
  resolve: {
    modules: ["node_modules"], // import时到哪些地方去寻找模块
    extensions: [".web.js", ".mjs", ".js", ".json", ".web.jsx", ".jsx"], // require的时候可以直接使用require('file')，不用require('file.js')
    alias: {
      antdcss: "antd/dist/antd.min.css"
    } //别名
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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: ["css-loader", "sass-loader"]
        })
        // use: [
        //   {
        //     loader: "style-loader"
        //   },
        //   {
        //     loader: "css-loader"
        //   },
        //   {
        //     loader: "postcss-loader",
        //     options: {
        //       plugins: [precss(), autoprefixer(), mqpacker()]
        //     }
        //   },
        //   {
        //     loader: "sass-loader"
        //   }
        // ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [clean_w_p, extract_w_p, copy_w_p, html_w_p]
};
