# webpack
>代码转换、文件优化、代码分割、模块合并、自动刷新、代码校验、自动发布
npm i webpack webpack-cli -D

webpack.config.js
mode entry output plugins optimization devtool watch watchOptions resolve

npm i html-webpack-plugin //html模板

loader的特点是单一 顺序从下到上，从右到左
style-loader把css插入到head中的style标签 css-loader负责处理css
npm i style-loader css-loader -D
npm i stylus stylus-loader -D
npm i mini-css-extrach-plugin -D
npm i postcss-loader autoprefixer -D
npm i optimize-css-assets-webpack-plugin -D //放在plugins
npm install uglifyjs-webpack-plugin -D //压缩js文件从而加快加载速度，但是会影响编译速度，最后打包再打开(生产模式)
npm i babel-loader @babel/core @babel/preset-env -D //处理js文件

npm i @babel/plugin-proposal-class-properties -D

npm i @babel/polyfill -D
npm i jquery
npm i expose-loader -D
若是cdn引入的话，要用externals选线排除出来，不要每个模块都打包jquery模块

webpack打包图片
npm i file-loader -D
//npm i html-withimg-loader
npm i url-loader -d
//file-loader默认会在内部生成一张图片到build目录下
//把生成的图片的名字返回回来
1) 在js中创建图片
2) 在css中引入backgroun('url')
3) <img src>

npm i clean-webpack-plugin -D
npm i copy-webpack-plugin -D

js tree shaking
要求是ES6的模块系统(import\export)
然后按需引入即可 import {a} from './util.js'
第三方包的话要安装es版本， 例如npm install lodash-es --save