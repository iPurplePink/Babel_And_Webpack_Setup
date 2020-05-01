const path = require('path')

module.exports = {
  entry: path.resolve(__dirname,'src'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  }, 
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'src')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}