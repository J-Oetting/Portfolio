const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    entry: [
      './index.js'
    ],
    output: {
      path: __dirname,
      filename: './bundle.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react'
            ]
          }
        }
      ]
    },
    plugins: [new NodePolyfillPlugin()]
  }