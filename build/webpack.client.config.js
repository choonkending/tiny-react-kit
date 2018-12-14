/* @flow */
const path = require('path');

module.exports = {
  entry: './src/js/client/index.js',
  context: path.resolve(__dirname, '..'),
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'
      },
      {
        test: /\.(png|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  output: {
    filename: 'main.js',
    publicPath: '/static/',
    path: path.resolve(__dirname, '../dist')
  }
};
