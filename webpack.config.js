const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');
const HappyPack = require('happypack');
const srcPath = path.resolve(__dirname, 'src')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {contentBase: './dist', hot: true},
  entry: {
    app: './src/index.js',
    h5: './src/h5.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {test: /\.css$/, use: ['happypack/loader?id=css']},
      {test: /.js$/, use: ['happypack/loader?id=babel'], include: [srcPath]},
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({title: 'app html', chunks: ['app'], filename: 'app.html'}),
    new HtmlWebpackPlugin({title: 'h5 html', chunks: ['h5'], filename: 'h5.html'}),
    new ManifestPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HappyPack({id: 'babel', loaders: ['babel-loader']}),
    new HappyPack({id: 'css', loaders: ['style-loader', 'css-loader']}),
  ]
};