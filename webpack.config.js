const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const UglifyJSPluginConfig = new UglifyJSPlugin()
const EnvVariableFlag = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  'process.argv': JSON.stringify(process.argv)
})

const dev = process.env.NODE_ENV === 'dev'

let config = {
  entry: './src/scripts/index.js',
  watch: dev,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          include: [
            path.resolve(__dirname, 'src')
          ],
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            emitWarning: true
          }
        },
        {
          test: /\.jsx?$/,
          include: [
            path.resolve(__dirname, 'src')
          ],
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
           { loader: 'css-loader', options:{importLoaders: 1} },
           { loader: 'postcss-loader',
           options: {
               plugins: (loader) => [
                 require('autoprefixer')({
                   browsers: ['last 2 versions', 'ie > 8']
                 })
               ]
             }
            },
           'sass-loader'
            ]
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'file-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          use: [
            {loader: 'img-loader',
              options: {
              enabled: !dev
            }},
            {loader: 'file-loader',
              options: {
              enabled: dev
            }},
          ]

        },
      ]
  },

  resolve: {

    modules: [
      'node_modules'
    ],
    extensions: ['.js', '.json', '.jsx', '.css'],

    alias: {
      '@components': path.resolve(__dirname, 'src/scripts/components/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@style': path.resolve(__dirname, 'src/style/'),
      '@reducers': path.resolve(__dirname, 'src/scripts/reducers/'),
      '@actions': path.resolve(__dirname, 'src/scripts/actions/'),
      '@containers': path.resolve(__dirname, 'src/scripts/containers/')
    }
  },
  plugins: [HtmlWebpackPluginConfig, EnvVariableFlag],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    overlay: true
  },
  stats: 'errors-only',
}

if(!dev) {
  config.plugins.push(UglifyJSPluginConfig)
}


module.exports = config
