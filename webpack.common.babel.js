// common
module.exports = {
  module: {
    loaders: [
      {
        test: /\.(css|scss|pcss)$/,
        loader: 'style-loader!css-loader',
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
