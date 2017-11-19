/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack')
const merge = require('webpack-merge')
const CompressionPlugin = require('compression-webpack-plugin')
const { join } = require('path')
const { root } = require('../')

const PATHS = {
	entry: join(root, 'src/client'),
	output: join(root, 'dist/public'),
	components: join(root, 'src/client/components'),
	reducers: join(root, 'src/client/reducers'),
	utils: join(root, 'src/client/utils')
}

const commonConfig = {
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		PATHS.entry
	],
	output: {
		path: PATHS.output,
		filename: 'bundle.js',
		publicPath: '/public'
	},
	resolve: {
		alias: {
			Components: PATHS.components,
			Reducers: PATHS.reducers,
			Utils: PATHS.utils,
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '*']
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: ['react-hot-loader/webpack', 'awesome-typescript-loader']
		}]
	}
}

const prodConfig = {
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false, // Suppress uglification warnings
				unsafe: true,
				unsafe_comps: true,
				screw_ie8: true
			},
			output: {
				comments: false
			},
			exclude: [/\.min\.js$/gi]
		}),
		new webpack.optimize.AggressiveMergingPlugin(),
		new CompressionPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})
	]
}

const devConfig = {
	output: {
		hotUpdateChunkFilename: 'hot/hot-update.js',
		hotUpdateMainFilename: 'hot/hot-update.json'
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = env =>
	env.NODE_ENV === 'production' ?
		merge(commonConfig, prodConfig) :
		merge(commonConfig, devConfig)
