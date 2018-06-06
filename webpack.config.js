const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const env = process.env.NODE_ENV;

const config = {
  entry: path.join(__dirname, 'src', 'main.js'),
  mode: env,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: (env === 'development') ? '/' : '/', // adjust if needed
  },
  optimization: {
    splitChunks: {
      // https://github.com/jantimon/html-webpack-plugin/issues/882
      chunks: 'all',
    },
  },
  devtool: (env === 'development') ? 'cheap-module-eval-source-map' : undefined,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
      },
      {
        test: /\.scss$/,
        use: [
          (env !== 'production') ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'modern-webpack-starter',
      template: path.join(__dirname, 'src', 'index.html'),
      inject: true,
      minify: (env === 'production') ? {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      } : false,
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: (env !== 'production') ? '[name].css' : '[name].[hash].css',
      chunkFilename: (env !== 'production') ? '[id].css' : '[id].[hash].css',
    })
  ],
};

if (env === 'production') {
  config.optimization.minimizer = [
    new OptimizeCSSAssetsPlugin(),

    // Because we're overwriting config.optimization.minimizer,
    // we need to declare this manually
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
    }),
  ];
}

module.exports = config;