/* eslint-disable global-require, no-unused-vars */

import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// cleaner paths
const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  examples: path.join(__dirname, 'examples'),
};

module.exports = {
  entry: {
    src: PATHS.examples,
    vendor: [
      'react',
      'react-dom',
    ],
  },
  output: {
    path: PATHS.dev,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    hot: true,
    inline: true,
    quiet: true,
    overlay: true,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
    }),
    new HtmlWebpackPlugin({
      template: 'examples/example.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
