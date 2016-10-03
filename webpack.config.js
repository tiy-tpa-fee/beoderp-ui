'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const validate = require('webpack-validator')
const HtmlWebpackPlugin = require('html-webpack-plugin')

require('dotenv').config()

const ROOT_PATH = path.resolve(__dirname)
const SOURCE_PATH = path.resolve(ROOT_PATH, 'src')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')

const config = {
  host: 'localhost', // Use 0.0.0.0 for external availability
  port: '3000'
}

const common = {
  entry: [
    'whatwg-fetch',
    SOURCE_PATH
  ],
  output: {
    filename: 'bundle.js',
    path: BUILD_PATH,
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(SOURCE_PATH, 'index.html'),
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      AUTH0: JSON.stringify({
        CLIENT_ID: process.env.AUTH0_CLIENT_ID,
        DOMAIN: process.env.AUTH0_DOMAIN
      })
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      include: [SOURCE_PATH],
      loader: 'babel'
    }, {
      test: /\.(png|jpe?g|gif|svg|ttf|eot|otf|woff|woff2)$/,
      loader: 'file'
    }]
  }
}

const development = {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${config.host}:${config.port}`,
    'webpack/hot/only-dev-server'
  ],
  output: {
    devtoolModuleFilenameTemplate: '[resource-path]'
  },
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: false,
    stats: 'errors-only',
    host: config.host,
    port: config.port
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({ multiStep: true })
  ]
}

const production = {
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ]
}

module.exports = validate(merge(
  process.env.npm_lifecycle_event === 'build'
  ? production
  : development,
  common
))
