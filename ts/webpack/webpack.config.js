const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const mqpacker = require("css-mqpacker");
const precss = require("precss");
const autoprefixer = require("autoprefixer");
const { CheckerPlugin } = require("awesome-typescript-loader");
const ROOT = path.resolve(__dirname);

const extract_w_p = new ExtractTextPlugin({
  filename: "bundle.css",
  disable: false,
  allChunks: true
});

module.exports = {
  entry: [path.resolve(__dirname, "../src/index.tsx")],
  //   entry: ["babel-polyfill", path.resolve(__dirname, "../src/index.tsx")],/**babel 入口 */
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../public"),
    publicPath: "/",
    filename: "[name].bundle.js"
    // sourceMapFilename: "[name].bundle.map.js"
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.(ts|tsx)$/, loader: "source-map-loader" },

      /**babel */

      //   {
      //     test: /\.(js|jsx)$/,
      //     exclude: /node_modules/,
      //     loaders: "babel-loader",
      //     query: {
      //       // presets: ["es2015", "react"]
      //       presets: [
      //         "env",
      //         "es2015",
      //         "stage-0",
      //         "react"
      //       ] /**加入babel-preset-stage-0 并使用这个配置就能使用es7的语法,但是它回报更多的错误,所以我放弃了它 */,
      //       plugins: [
      //         "transform-runtime",
      //         "transform-decorators-legacy", //http://es6.ruanyifeng.com/#docs/decorator#%E7%B1%BB%E7%9A%84%E4%BF%AE%E9%A5%B0
      //         "transform-class-properties",
      //         "transform-object-rest-spread",
      //         "emotion",
      //         [
      //           "zent",
      //           {
      //             moduleMappingFile: "zent/lib/module-mapping.json",
      //             noModuleRewrite: false,
      //             automaticStyleImport: true,
      //             useRawStyle: false
      //             /**https://youzan.github.io/zent/zh/guides/babel-plugin-zent#babel-plugin-zent */
      //           }
      //         ],
      //         [
      //           "import",
      //           {
      //             libraryName: "antd",
      //             libraryDirectory: "es",
      //             style: "css" // `style: true` 会加载 less 文件
      //           }
      //         ]
      //       ]
      //     }
      //   },

      /**babel */

      {
        // test: /\.(css|less)$/,
        // // include: ROOT + "../src",
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
        //   use: [
        //     {
        //       loader: "css-loader",
        //       options: {
        //         //minimize: true,//是否压缩css
        //         modules: false, //开启将会吧选择器变成随机字符串
        //         // localIdentName: "[path][name]__[local]--[hash:base64:5]",
        //         // getLocalIdent: (
        //         //   context,
        //         //   localIdentName,
        //         //   localName,
        //         //   options
        //         // ) => {
        //         //   return "whatever_random_class_name";
        //         // }
        //         publicPath: "/public"
        //       }
        //     },
        //     "less-loader",
        //     {
        //       loader: "postcss-loader",
        //       options: {
        //         plugins: [precss(), autoprefixer(), mqpacker()]
        //       }
        //     }
        //   ]
        // })
        test: /\.(css|scss)$/ /**scss 配置 */,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          use: [
            {
              loader: "css-loader",
              options: {
                //url: false,
                //minimize: true,//是否压缩css
                //sourceMap: true,
                modules: false, //开启将会吧选择器变成随机字符串
                // localIdentName: "[path][name]__[local]--[hash:base64:5]",
                // getLocalIdent: (
                //   context,
                //   localIdentName,
                //   localName,
                //   options
                // ) => {
                //   return "whatever_random_class_name";
                // }
                publicPath: "/public"
              }
            },
            {
              loader: "sass-loader"
            },
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
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024 * 20
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".png", ".jpg", "gif"],
    alias: {
      "@": ROOT + "../src"
    }
  },
  plugins: [new CheckerPlugin(), extract_w_p]
};
