/* eslint-disable prefer-template*/
import webpack from 'webpack';
import { DIST_FOLDER } from '../tools/constants';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const postcssPresetEnv = require('postcss-preset-env');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

process.noDeprecation = true;

const getAssetsLoader = () => ({
  test: /\.(png|woff|woff2|eot|ttf|gif)$/,
  loader: 'url-loader?limit=100000'
});

const getJSXLoader = () => ({
  test: /(\.js$|\.jsx?$)/,
  loader: 'babel-loader',
  exclude: [/node_modules/],
  options: {
    sourceMap: true
  }
});

const getCSSLoader = () => ({
  test: /\.(css)$/,
  include: [/node_modules/, /src/],
  use: [
    {
      loader: MiniCssExtractPlugin.loader
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: false,
        config: {
          path: 'postcss.config.js'
        }
      }
    }
  ]
});

const getExternalSCSSLoader = () => ({
  test: /\.ps/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 1
      }
    },
    {
      loader: 'sass-loader',
      options: { sourceMap: true }
    }
  ]
});

const getSCSSLoader = () => ({
  test: /^((?!\.external).)*scss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        sourceMap: true,
        modules: true,
        localIdentName: '[name]__[local]__[hash:base64:5]'
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: false,
        config: {
          path: 'postcss.config.js'
        },
        plugins: () => [
          postcssPresetEnv()
        ]
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
});

const getPlugins = plugins => {
  const basePlugins = [
    new webpack.LoaderOptionsPlugin({
      noInfo: true,
      debug: true,
      minimize: true
    }),
    new FixStyleOnlyEntriesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({ filename: 'bundle.css' }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './src/index.html',
    }),
    ...plugins
  ];

  return process.env.ANALYZE_BUNDLE ? basePlugins.concat(new BundleAnalyzerPlugin()) : basePlugins;
};

const extensions = ['.js', '.jsx', '.css', '.scss'];

const optimization = {
  occurrenceOrder: true,
  usedExports: true,
  minimize: true,
  minimizer: [
    new TerserJSPlugin({}),
    new OptimizeCSSAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      }
    })
  ]
};

export default ({ plugins, ...options }) => ({
  ...options,
  target: 'web',
  devServer: {
    contentBase: `../${DIST_FOLDER}`
  },
  bail: true,
  plugins: getPlugins(plugins),
  optimization,
  resolve: {
    extensions
  },
  module: {
    rules: [
      getJSXLoader(),
      getCSSLoader(),
      getSCSSLoader(),
      getAssetsLoader()
    ]
  }
});
