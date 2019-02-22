'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports = {
  mode: 'development',
  entry: [
    './src/main/js/app.js'
  ],

  output: {
    path: __dirname,
    filename: './src/main/resources/static/built/bundle.js'
  },

  devServer: {
      hot: true,
      watchOptions: {
        poll: true
      }
  },

  module: {
   rules: [
         {
           test: /\.vue$/,
           use: 'vue-loader'
         },
         {
           test: /\.css$/,
           use: [
             'vue-style-loader',
             'css-loader'
             ]
         },
         {
           test: /\.js$/,
           use: 'babel-loader'
         }
       ]
  },

  plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new VueLoaderPlugin(),
     new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/main/resources/templates/index.html',
          inject: true
            })
  ]
}
