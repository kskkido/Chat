const webpack = require('webpack')
const configs = require('../webpack.config')

module.exports = () => webpack(configs)
