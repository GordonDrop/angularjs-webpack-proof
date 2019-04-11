const path = require('path');
const merge = require('webpack-merge');
const prodConfig = require('./webpack.config.prod');
const devConfig = require('./webpack.config.dev');

const commonConfig = {
  entry: {
    app: path.resolve(__dirname, './src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].[contenthash].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
};

module.exports = function(env, argv) {
  if (argv.mode === 'production') {
    return merge([commonConfig, prodConfig]);
  }
  if (argv.mode === 'development') {
    return merge([commonConfig, devConfig]);
  }
  throw new Error('Mode is not specified.');
};
