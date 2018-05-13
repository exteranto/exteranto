const basePath = (dir) => require('path').join(__dirname, dir)
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin

module.exports = {
  plugins: [
    new FriendlyErrorsWebpackPlugin,
    new VueLoaderPlugin
  ],
  entry: {
    popup: './src/app/popup/main.ts',
    content: './src/app/content/main.ts',
    background: './src/app/background/main.ts'
  },
  output: {
    path: basePath('dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      '@': basePath('src'),
      'vue$': 'vue/dist/vue.runtime.esm.js',
      'config': basePath('config')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [basePath('src')],
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [basePath('src'), basePath('config')],
        options: { appendTsSuffixTo: [/\.vue$/] }
      }
    ]
  },
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
