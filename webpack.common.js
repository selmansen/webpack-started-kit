const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const buildPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: {
    homepage: './src/pages/homepage/index.js',
    about: './src/pages/about/index.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        resourceQuery: /template/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/homepage/index.html',
      inject: true,
      chunks: ['homepage'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/about/index.html',
      inject: true,
      chunks: ['about'],
      filename: 'about.html'
    })
  ],
  output: {
    filename: 'js/[name].js',
    path: buildPath,
    clean: true
  }
};