/* eslint-disable import/no-extraneous-dependencies */
const { env } = require('../')
const clientConfig = require('./client')
const serverConfig = require('./server')
const applyBaseConfig = require('./base')(env)

module.exports = [clientConfig, serverConfig].map(applyBaseConfig)
