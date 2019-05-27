import config from './webpack.config.prod';

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

export default {
  ...config,
  plugins: [
    ...config.plugins,
    new BundleAnalyzerPlugin()
  ]
};

