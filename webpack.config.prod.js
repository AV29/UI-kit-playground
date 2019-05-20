/* eslint-disable prefer-template*/
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

process.noDeprecation = true;

module.export = {
  devtool: 'source-map',
  entry: [
    './src/index.jsx'
  ],
  output: {
    filename: 'prod-bundle.js',
    publicPath: '/'
  },
  mode: 'production',
  target: 'web',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      noInfo: true,
      debug: true,
      minimize: true
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './src/index.html',
    }),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    occurrenceOrder: true,
    minimize: true,
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
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
        use: [
          'style-loader',
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
              sourceMap: true,
              strictMath: true
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
