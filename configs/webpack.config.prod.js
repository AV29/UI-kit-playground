/* eslint-disable prefer-template*/
import getConfig from './webpack.config.common';
import { PRODUCTION } from '../tools/constants';

const path = require('path');
const webpack = require('webpack');

module.exports = getConfig({
  mode: PRODUCTION,
  devtool: 'source-map',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      noInfo: true,
      debug: true,
      minimize: true
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
});

