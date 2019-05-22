/* eslint-disable prefer-template*/
import { PRODUCTION } from './tools/constants';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './src/index.html',
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx?$)/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        options: {
          sourceMap: true
        }
      },
      {
        test: /(\.css|\.scss)$/,
        loader: ExtractTextPlugin.extract(
          Object.assign({
            fallback: {
              loader: 'style-loader',
              options: {
                hmr: false
              }
            },
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  sourceMap: true,
                  modules: true,
                  localIdentName: '[name]__[local]__[hash:base64:5]'
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        )
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|gif)$/,
        include: /node_modules/,
        exclude: /src/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};

