const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		main: './index.js',
		analytics: './analytics.js'
	},
	mode: 'development',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.js','.json','.png'],
		alias: {
			'@models': path.resolve(__dirname, 'src/models')
		}
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg|svg|gif|webm|jpeg|eps|ai|tiff|raw|psd)$/,
				use: ['file-loader']
			},
			{
				test: /\.(otf|ttf|woff|woff2|eot|jfproj|fot)$/,
				use: ['file-loader']
			},
			{
				test: /\.xml$/,
				use: ['xml-loader']
			},
			{
				test: /\.csv$/,
				use: ['csv-loader']
			},
		]
	}
}