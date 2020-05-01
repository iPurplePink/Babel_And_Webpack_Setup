# Notes

## dist/
- default output directory of webpack bundler
- *distrubution*

## dist/main.js
- default output filename of webpack bundler result
- webpack setup all the starter javascript code to evaluate src/index.js file

## webpack.config.js

### entry
- the directory that webpack need to bundle 
### output
- where the webpack bundler will generate the file
### devServer
- for customizing your developement server

```javascript
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
```