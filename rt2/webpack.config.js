const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
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
const html_w_p = new HtmlWebpackPlugin({ template: "./public/index.html" });

const browserSync = new BrowserSyncPlugin({
  /**配置这个插件的时候还得装一个browser-sync */
  host: "localhost",
  port: 3000,
  files: "",
  server: {
    baseDir: "./dist"
  }
});

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
          // presets: ["es2015", "react"]
          presets: [
            "env",
            "es2015",
            "stage-0",
            "react"
          ] /**加入babel-preset-stage-0 并使用这个配置就能使用es7的语法,但是它回报更多的错误,所以我放弃了它 */,
          plugins: [
            "transform-runtime",
            "transform-decorators-legacy",
            "transform-class-properties",
            "transform-object-rest-spread",
            "emotion"
          ]
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
          use: [
            {
              loader: "css-loader",
              options: {
                //minimize: true,//是否压缩css
                modules: true,
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                getLocalIdent: (
                  context,
                  localIdentName,
                  localName,
                  options
                ) => {
                  return "whatever_random_class_name";
                }
              }
            },
            "sass-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [precss(), autoprefixer(), mqpacker()]
              }
            }
          ]
        })
      },

      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          fallback: "file-loader"
        }
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
              // publicPath: "dist/",
              // outputPath: "./images/",
              //emitFile: true //默认情况下会生成文件，可以通过将此项设置为 false 来禁用（例如使用了服务端的 packages）。
              //useRelativePath: process.env.NODE_ENV === "production" //如果你希望为每个文件生成一个相对 URL 的 context 时，应该将 useRelativePath 设置为 true。
            }
          }
        ]
      }
    ]
  },
  plugins: [clean_w_p, extract_w_p, copy_w_p, html_w_p, browserSync]
};
