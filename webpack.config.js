/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    watch: !isProduction,
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'main.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        }, {
          test: /\.scss$/,
          use: [
            'style-loader', 'css-loader', 'sass-loader',
          ],
        }, {
          test: /\.(png|jpe?g|svg|gif)$/i,
          use: {
            loader: 'file-loader',
          },
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
    ],
  };

  return config;
};
