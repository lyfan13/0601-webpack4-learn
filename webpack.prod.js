const merge = require('webpack-merge')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')//build时清除上次目录
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')//压缩css工具
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')//压缩js代码

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new OptimizeCssPlugin(),
      new UglifyJsPlugin()
    ]
  },
  watch:true,
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
          }
        }
      }
    ]
  }
})