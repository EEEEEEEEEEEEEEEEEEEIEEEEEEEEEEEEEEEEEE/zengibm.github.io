"use strict";
// ./src/webpack/client.ts
Object.defineProperty(exports, "__esModule", { value: true });
var webpack = require("webpack");
var lodash_1 = require("lodash"); // lodash提供的深度复制方法cloneDeep
// 客户端+服务端全环境公共配置baseConfig，项目根目录路径baseDir，获取tsRule的方法getTsRule
var base_1 = require("./base");
var clientBaseConfig = lodash_1.cloneDeep(base_1.default); // 客户端全环境公共配置
clientBaseConfig.entry = {
    client: [
        './src/client/index.tsx',
    ],
    vendor: [
        'react',
        'react-dom',
    ],
};
var clientDevConfig = lodash_1.cloneDeep(clientBaseConfig); // 客户端开发环境配置
clientDevConfig.cache = false; // 禁用缓存
clientDevConfig.output.filename = '[name].js'; // 直接使用源文件名作为打包后文件名
clientDevConfig.module.rules.push(base_1.getTsRule('./src/webpack/tsconfig.client.json'));
clientDevConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    filename: 'vendor.js',
    name: 'vendor',
}), new webpack.NoEmitOnErrorsPlugin());
var clientProdConfig = lodash_1.cloneDeep(clientBaseConfig); // 客户端生产环境配置
// TODO 客户端生产环境配置暂不处理和使用
exports.default = {
    development: clientDevConfig,
    production: clientProdConfig,
};
