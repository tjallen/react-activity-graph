import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import common from './webpack.common.babel.js';

const isProd = (process.env.NODE_ENV === 'production');

function getPlugins() {
  const plugins = [];
  // expose node_env to webpack
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: process.env.NODE_ENV,
    },
  }));
  // conditionally add production uglify
  if (isProd) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin(),
    );
  }
  return plugins;
}

// module publishing
module.exports = merge(common, {
  entry: {
    'react-activity-graph': './src/index.js',
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
  },
  externals: {
    react: true,
    'date-fns': true,
    'styled-components': true,
  },
  plugins: getPlugins(),
});
