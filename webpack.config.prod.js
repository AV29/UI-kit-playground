/* eslint-disable prefer-template*/
import { PRODUCTION } from './tools/constants';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './src/index',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    target: 'web',
    mode: PRODUCTION,
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            noInfo: true,
            debug: true,
            minimize: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new MiniCssExtractPlugin({ filename: 'bundle.css' }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: './src/index.html',
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.less']
    },
    module: {
        rules: [{
            test: /(\.js$|\.jsx?$)/,
            loader: 'babel-loader',
            exclude: [/node_modules/],
            options: {
                sourceMap: true
            }
        }, {
            test: /(\.css|\.scss)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {

                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    sourceMap: true,
                    modules: true,
                    localIdentName: '[name]__[local]__[hash:base64:5]'
                }
            }, {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                    strictMath: true
                }
            }]
        }, {
            test: /\.(png|woff|woff2|eot|ttf|gif)$/,
            include: /node_modules/,
            exclude: /src/,
            loader: 'url-loader?limit=100000'
        }]
    }
};

