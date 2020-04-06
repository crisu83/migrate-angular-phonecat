let ExtractTextPlugin = require('extract-text-webpack-plugin');
let appPath = __dirname + '/app';

module.exports = {
  context: appPath,
  mode: 'development',
  entry: './index.ts',
  output: {  
    path: appPath + '/dist',       
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: "url-loader?limit=5000"
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};