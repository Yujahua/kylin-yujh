const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const webpack = require('webpack');
const MockjsWebpackPlugin = require('mockjs-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: './',
        compress: false,
        host: '127.0.0.1',
        port: '20000',
        hot: true,
        inline: true,
        historyApiFallback: true,
        proxy: {
        },
        watchOptions: {
            poll: true,
            ignored: /node_modules/,
            aggregateTimeout: 300
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        // 根据配置文件，起指定端口的server,指向json文件作为接口数据
        new MockjsWebpackPlugin({
            path: path.join(__dirname, './src/mock'),
            //避免与应用端口冲突，端口定义为3000
            port: 3000
        })
    ],
    mode: 'development'
});
