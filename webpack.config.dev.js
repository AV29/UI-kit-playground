/* eslint-disable prefer-template*/
import webpack from 'webpack';
import { DEV_PORT, DEVELOPMENT } from './tools/constants';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const TerserJSPlugin = require('terser-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

process.noDeprecation = true;

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack/hot/only-dev-server',
    './src/index.jsx'
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
    new MiniCssExtractPlugin({ filename: 'bundle.css' }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './src/index.html',
    })
  ],
  optimization: {
    occurrenceOrder: true,
    minimize: true,
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
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
