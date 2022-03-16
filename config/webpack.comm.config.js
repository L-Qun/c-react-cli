const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|jpeg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'img',
            name: '[name]_[hash:6].[ext]',
            limit: 100 * 1024
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: `file-loader`
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader'],
        exclude: /node-modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'hello react'
    }),
    new DefinePlugin({
      BASE_URL: "'./'"
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue', '.mjs'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  }
};
