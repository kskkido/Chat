/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack')
const merge = require('webpack-merge')

const commonConfig = {
	resolve: {
		extensions: ['.js', '.jsx', '.json', '*'],
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			options: {
				presets: ['react', 'env']
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

