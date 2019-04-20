const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const modulesPath = path.resolve(__dirname, 'node_modules');
const srcPath = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'dist');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode,
  entry: [
    '@babel/polyfill',
    srcPath,
  ],
  output: {
    filename: 'code/name.js',
    globalObject: 'this',
    path: outputPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { modules: false }],
          ],
        },
        include: srcPath,
        exclude: [/\.worker\.js$/],
      },
      {
        test: /\.worker\.js$/,
        use: [
          {
            loader: 'worker-loader',
            options: {
              name: 'code/[name].js',
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { modules: false }],
              ],
            },
          },
        ],
        include: srcPath,
        exclude: modulesPath,
      },
    ],
  },
  performance: { hints: false },
  stats: { children: false, entrypoints: false, modules: false },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WorkerTest',
    }),
  ],
};
