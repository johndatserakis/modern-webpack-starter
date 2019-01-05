const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const env = process.env.NODE_ENV || 'development';

const config = {
    entry: [
        "@babel/polyfill", path.resolve(__dirname, 'src', 'main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: (env === 'development') ? '/' : '/',
        filename: (env === 'development') ? '[name].[hash].js' : '[name].[contenthash].js'
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            shared: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendor",
                enforce: true,
                chunks: "all"
            }
          }
        },
        minimizer: (env === 'development') ? [
            new OptimizeCSSAssetsPlugin(),
            new TerserPlugin()
        ] : undefined,
    },
    mode: env,
    devtool: (env === 'development') ? 'cheap-module-eval-source-map' : undefined,
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['eslint-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin('dist', {}),
        new HtmlWebpackPlugin({
            title: 'modern-webpack-starter',
            template: path.resolve(__dirname, 'src', 'index.html'),
            inject: true,
            minify: (env === 'development') ? undefined : {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
            }
        }),
        new MiniCssExtractPlugin({
            filename: (env !== 'production') ? '[name].css' : '[name].[hash].css',
            chunkFilename: (env !== 'production') ? '[id].css' : '[id].[hash].css',
        }),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, 'src', 'assets', 'images', 'favicon.png'), to: './favicon.png' }
        ])
    ],
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },

};

module.exports = config;