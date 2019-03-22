const path = require('path');
const fs = require('fs');
const process = require('process');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
//插件实例
console.log(process.env.NODE_ENV);

const extract_w_p = new ExtractTextPlugin({
  filename: 'bundle.css',
  disable: false,
  allChunks: true
});
module.exports = {
  entry: {
    index: ['babel-polyfill', path.resolve(__dirname, '../src/index.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/', //如果react-router 在多级路由下找不到css 或者js 资源的话配置这个可以解决
    filename: 'bundle.js'
  },

  resolve: {
    modules: ['node_modules', 'src'], // import时到哪些地方去寻找模块
    extensions: [
      '.web.js',
      '.mjs',
      '.js',
      '.vue',
      'scss',
      '.json',
      '.web.jsx',
      '.jsx'
    ], // require的时候可以直接使用require('file')，不用require('file.js')
    alias: {
      reducers: `${path.resolve(__dirname)}/../src/common/reducers`,
      vue: 'vue/dist/vue.js' //因为是使用webpack，默认实用的是vue的runtime版本，不包含编译，因此会报错，在config中添加如下代码
    } //别名
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: 'babel-loader'
       
      },
      {
        test: /\.(scss|css)$/,
        use:
          process.env.NODE_ENV === 'production'
            ? ExtractTextPlugin.extract({
                //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      minimize: true, //是否压缩css
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
                      importLoaders: 1,
                      publicPath: '/'
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      config: {
                        path: path.join(
                          process.cwd(),
                          'webpack/tools/postcss.config.js'
                        )
                      }
                      // plugins: [precss(), autoprefixer(), mqpacker()]
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      // 你也可以从一个文件读取，例如 `variables.scss`
                      // data: path.join(process.cwd(), 'src/index.scss')
                    }
                  },
                  {
                    loader: 'sass-resources-loader',
                    options: {
                      // 你也可以从一个文件读取，例如 `variables.scss`
                      resources: path.join(
                        process.cwd(),
                        'src/common/scss/variable.scss'
                      )
                    }
                  }
                ]
              })
            : [
                'style-loader',
                'css-loader',
                {
                  loader: 'postcss-loader',
                  options: {
                    config: {
                      path: path.join(
                        process.cwd(),
                        'webpack/tools/postcss.config.js'
                      )
                    }
                  }
                },
                'sass-loader',
                {
                  loader: 'sass-resources-loader',
                  options: {
                    // 你也可以从一个文件读取，例如 `variables.scss`
                    resources: path.join(
                      process.cwd(),
                      'src/common/scss/variable.scss'
                    )
                  }
                }
              ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          limit: 1024 * 10,
          outputPath: 'images',
          fallback: 'file-loader'
        }
      },
      {
        test: /\.(eot|woff|svg|ttf|woff2|gif|appcache|mp3)(\?|$)/,
        exclude: /^node_modules$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'files',
              publicPath: '/',
              emitFile: true //默认情况下会生成文件，可以通过将此项设置为 false 来禁用（例如使用了服务端的 packages）。
              //useRelativePath: process.env.NODE_ENV === "production" //如果你希望为每个文件生成一个相对 URL 的 context 时，应该将 useRelativePath 设置为 true。
            }
          }
        ]
      }
    ]
  },
  plugins: [extract_w_p]
};
