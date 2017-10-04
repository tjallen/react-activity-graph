import webpack from 'webpack';
import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

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

// common
const config = {
  module: {
    loaders: [
      {
        test: /\.(css|scss|pcss)$/,
        loader: 'style-loader!css-loader?modules',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
};

// dev
const devConfig = Object.assign({}, config, {
  devServer: {
    contentBase: './examples/',
    // hot: true,
    // inline: true,
    open: true,
  },
  entry: {
    // index: './examples/test.js',
    root: './examples/root.js',
    // 'react-activity-graph': './src/index.js',
  },
  // entry: [
  //   './examples/test.js',
  // ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'examples'),
    publicPath: '/',
    // libraryTarget: 'iife',
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   // filename: 'examples/index.html',
    //   // template: 'examples/template.html',
    //   // inject: false,
    // }),
  ],
});

// module publishing
const pubConfig = Object.assign({}, config, {
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

module.exports = [
  devConfig,
  pubConfig,
];
