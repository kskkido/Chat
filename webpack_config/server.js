/* eslint-disable import/no-extraneous-dependencies */
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const { join } = require('path')
const { root } = require('../')

const PATHS = {
	entry: join(root, 'server'),
	output: join(root, 'dist/server')
}

const commonConfig = {
	entry: PATHS.entry,
	target: 'node',
	externals: [nodeExternals()],
	output: {
		path: PATHS.output,
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	}
}

const prodConfig = {}

const devConfig = {}

module.exports = env =>
	env.NODE_ENV === 'production' ?
		merge(commonConfig, prodConfig) :
		merge(commonConfig, devConfig)
