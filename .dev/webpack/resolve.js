const path = require('path');

module.exports = {
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
      reducers: `${path.resolve(__dirname)}/src/common/reducers`,
      vue: 'vue/dist/vue.js' //因为是使用webpack，默认实用的是vue的runtime版本，不包含编译，因此会报错，在config中添加如下代码
    } //别名
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  }
};
