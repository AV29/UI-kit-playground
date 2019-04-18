/* eslint-disable prefer-template*/
import webpack from 'webpack';
import { DEV_PORT, DEVELOPMENT } from './tools/constants';

const HtmlWebpackPlugin = require('html-webpack-plugin');

process.noDeprecation = true;

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    `webpack-dev-server/client?http://localhost:${DEV_PORT}`,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    filename: 'dev-bundle.js',
    publicPath: '/'
  },
  mode: DEVELOPMENT,
  target: 'web',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      noInfo: true,
      debug: true,
      minimize: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
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
        test: /(\.css|\.less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              minimize: true,
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
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
