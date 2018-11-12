/* @flow */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node",
  entry: './src/js/server/index.js',
  context: path.resolve(__dirname, '..'),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "server.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'
      }
    ]
  },
  externals: [nodeExternals()],
  node: {
    __dirname: true
  }
};
