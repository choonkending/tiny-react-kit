/* @flow */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node",
  entry: './src/js/server/index.js',
  context: path.resolve(__dirname, '..'),
  output: {
    publicPath: '/static/',
    path: path.resolve(__dirname, "../dist"),
    filename: "server.js"
  },
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
  externals: [nodeExternals()],
  node: {
    __dirname: true
  }
};
