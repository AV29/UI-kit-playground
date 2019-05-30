/* eslint-disable prefer-template*/
import webpack from 'webpack';
import { DEVELOPMENT } from '../tools/constants';
import getConfig from './webpack.config.common';

module.exports = getConfig({
  mode: DEVELOPMENT,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    filename: 'dev-bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});
