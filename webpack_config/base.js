const webpack = require('webpack')
const merge = require('webpack-merge')
const { join } = require('path')
const { root } = require('../')

const PATHS = {
	root,
	utils: join(root, 'src/utils')
}

const commonConfig = {
	resolve: {
		alias: {
			Root: PATHS.root,
			Utils: PATHS.utils
		},
		extensions: ['.js', '.jsx', '.json', '*'],
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			options: {
				presets: ['react', 'env', 'stage-0']
			}
		}]
	}
}

const prodConfig = {
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	]
}

const devConfig = {
	devtool: 'cheap-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"development"'
			}
		})
	]
}

module.exports = (env) => {
	const envConfig = env.NODE_ENV === 'production' ? prodConfig : devConfig

	return factory => merge(commonConfig, envConfig, factory(env))
}

