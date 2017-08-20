const env = process.env.NODE_ENV || 'development'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseFolder = path.resolve(__dirname, '..', '')
const srcFolder = path.resolve(__dirname, '..', './src')
const distFolder = path.resolve(__dirname, '..', './dist')

module.exports = {
	context: srcFolder,
	devtool: 'source-map',
	entry: [ srcFolder + '/app.js' ],
	output: {
		filename: 'app.js',
		path: distFolder,
		publicPath: '/',
		sourceMapFilename: 'app.map'
	},
	devServer: {
		contentBase: srcFolder,
		publicPath: '/',
		historyApiFallback: true,
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				],
				include: srcFolder
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [require('autoprefixer')({ browsers: [ 'last 3 version', 'ie >= 10' ] })]
						}
					},
					'sass-loader'
				]
			},
			// {
			//   test: /\.sass$/,
			//   loader: ExtractTextPlugin.extract({ use: ['css-loader', 'sass-loader'] }),
			// },
			// {
			// 	test: /\.(sass|scss)$/,
			// 	use: ExtractTextPlugin.extract({ use: ['css-loader', 'sass-loader'] }),
			// },
			// {
			// 	test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
			// 	use: 'file-loader?name=assets/[name].[ext]'
			// },
			// {
			// 	test: /\.(jpg|jpeg|png|gif|ico|svg)$/,
			// 	use: [ 'url-loader?limit=10240&name=assets/[name].[ext]' ],
			// 	include: path.resolve(srcFolder, 'assets')
			// }
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
	    new HtmlWebpackPlugin({
		    template: srcFolder + '/index.html',
		    path: distFolder,
		    filename: 'index.html'
		}),
	    new webpack.ProvidePlugin({
	        $: 'jquery',
	        jQuery: 'jquery',
	        'window.jQuery': 'jquery',
	        Popper: ['popper.js', 'default']
	    })
    ],
}
