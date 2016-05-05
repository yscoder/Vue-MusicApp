var path = require('path');
var projectRoot = path.resolve(__dirname, '../');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../public/'),
    // publicPath: './public/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.(css|less)$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
    }, {
      test: /vux.src.*?js$/,
      loader: 'babel'
    }, {
      test: /\.js$/,
      loader: 'babel',
      include: projectRoot,
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.html$/,
      loader: 'vue-html'
    }, {
      test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: '[name].[ext]?[hash:7]'
      }
    }]
  }
}
