const basePath = (dir) => require('path').join(__dirname, dir)
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin

module.exports = {
  plugins: [
    new VueLoaderPlugin
  ],
  entry: {
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
      'config': basePath(`config/index.ts`)
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [basePath('src')]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ]
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
