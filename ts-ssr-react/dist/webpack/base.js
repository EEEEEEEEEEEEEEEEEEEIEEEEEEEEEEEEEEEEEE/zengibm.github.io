"use strict";
// ./src/webpack/base.ts
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
exports.baseDir = path.resolve(__dirname, '../..'); // 项目根目录
exports.getTsRule = function (configFileName) { return ({
    test: /\.tsx?$/,
    use: [
        {
            loader: 'awesome-typescript-loader',
            options: {
                configFileName: configFileName,
            },
        },
    ],
}); };
var baseConfig = {
    module: {
        rules: [],
    },
    output: {
        path: path.resolve(exports.baseDir, './bundle'),
        publicPath: '/assets/',
    },
    plugins: [],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
};
exports.default = baseConfig;
