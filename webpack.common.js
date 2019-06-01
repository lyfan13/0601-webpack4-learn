const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')//自动插入html模板
const MiniCssWebpackPlugin = require('mini-css-extract-plugin')//把css放到同一个文件

module.exports = {
  entry: { app: './src/index.js' },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new MiniCssWebpackPlugin({
      filename: './css/main.css'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [MiniCssWebpackPlugin.loader, 'css-loader', 'postcss-loader', 'stylus-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader:'url-loader',
            options:{
              name:'[name]-[hash:5].[ext]',
              outputPath:'/img/',
              limit:20000//把小于20kb的文件转成base64格式
            }
          }
        ]
      },
    ]
  }
}