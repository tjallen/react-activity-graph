import path from 'path';
import merge from 'webpack-merge';
import common from './webpack.common.babel.js';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

// dev
module.exports = merge(common, { 
  devServer: {
    contentBase: './examples/',
  },
  entry: {
    root: './examples/root.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'examples'),
    publicPath: '/',
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   // filename: 'examples/index.html',
    //   // template: 'examples/template.html',
    //   // inject: false,
    // }),
  ],
});
