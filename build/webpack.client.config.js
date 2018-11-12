/* @flow */
const path = require('path');

module.exports = {
  entry: './src/js/client/index.js',
  context: path.resolve(__dirname, '..'),
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist')
  }
};
