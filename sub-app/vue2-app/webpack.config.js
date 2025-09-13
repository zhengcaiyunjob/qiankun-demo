const path = require('path');
const { defineConfig } = require('@vue/cli-service'); // 如果使用了Vue CLI
const packageName = require('./package.json').name; // 可选，用于微前端命名
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',

  devServer: {
    port: 7105,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    historyApiFallback: true
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.NODE_ENV === 'production' ? '//your-domain.com/' : '//localhost:7105/', 
    library: `${packageName}-[name]`,
    libraryTarget: 'umd',
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].js',
    chunkLoadingGlobal: `webpackJsonp_${packageName}`,
    globalObject: 'window'
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  }
}