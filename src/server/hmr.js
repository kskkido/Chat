/* eslint-disable import/no-extraneous-dependencies */
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import configs from '../../webpack.config'

const router = express.Router()
// webpack config is an array, [0: clientConfig, 1: serverConfig]
const clientConfig = configs[0]
const compiler = webpack(clientConfig)

export default router
	.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: clientConfig.output.publicPath
	}))
	.use(webpackHotMiddleware(compiler, {
		quiet: true
	}))
