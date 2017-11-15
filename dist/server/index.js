module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// define constants such as env
// module.exports getters that check for environment variables
// some how make symlink work like bones
var pkg = __webpack_require__(12);
var process = __webpack_require__(13);

var env = process.env;


module.exports = {
	get baseUrl() {
		return env.BASE_URL || 'http://localhost:' + module.exports.port;
	},
	get name() {
		return pkg.name;
	},
	get port() {
		return env.PORT || 1337;
	},
	get root() {
		return process.cwd();
	},
	package: pkg,
	env: env
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(env, 'env', '/Users/Kidokeisuke/bitcraft/index.js');
}();

;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("webpack-merge");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = __webpack_require__(6);

var _db2 = _interopRequireDefault(_db);

var _user = __webpack_require__(15);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// define associations
var _default = _db2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/db/index.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _sequelize = __webpack_require__(7);

var _sequelize2 = _interopRequireDefault(_sequelize);

var _child_process = __webpack_require__(14);

var _child_process2 = _interopRequireDefault(_child_process);

var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = _2.default.env.DATABASE_NAME || _2.default.name;
var url = _2.default.env.DATABASE_URL || 'postgres://localhost:5432/' + name;
var sync = _2.default.env.NODE_ENV === 'development' ? { force: true } : {};

var db = new _sequelize2.default(url, {
	define: {
		freezeTableName: true,
		timestamps: true,
		underscored: true
	},
	logging: false
});

// syncs database and runs callback if successful, called in ../server
db.syncAndLaunch = function (callback) {
	var attemptSync = function attemptSync() {
		var reattempt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		db.sync(sync).then(callback).catch(function (err) {
			console.error('failed to sync database');
			if (!reattempt) {
				console.log('reattempting start up');
				return new Promise(function (res) {
					_child_process2.default.exec('createdb "' + name + '"', res);
				}).then(function () {
					return attemptSync(true);
				});
			}
			console.error('failed to reattempt sync', err);
			return null;
		});
	};
	return attemptSync();
};

var _default = db;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(name, 'name', '/Users/Kidokeisuke/bitcraft/db/_db.js');

	__REACT_HOT_LOADER__.register(url, 'url', '/Users/Kidokeisuke/bitcraft/db/_db.js');

	__REACT_HOT_LOADER__.register(sync, 'sync', '/Users/Kidokeisuke/bitcraft/db/_db.js');

	__REACT_HOT_LOADER__.register(db, 'db', '/Users/Kidokeisuke/bitcraft/db/_db.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/db/_db.js');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = __webpack_require__(2);

var _path2 = _interopRequireDefault(_path);

var _bodyParser = __webpack_require__(10);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _morgan = __webpack_require__(11);

var _morgan2 = _interopRequireDefault(_morgan);

var _ = __webpack_require__(0);

var _db = __webpack_require__(5);

var _db2 = _interopRequireDefault(_db);

var _hmr = __webpack_require__(16);

var _hmr2 = _interopRequireDefault(_hmr);

var _api = __webpack_require__(26);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PUBLIC_PATH = _path2.default.join(_.root, 'dist/public');
var app = (0, _express2.default)();

var _default = app.use(_.env.NODE_ENV === 'development' ? _hmr2.default : function (req, res, next) {
	return next();
}).use((0, _morgan2.default)('dev')).use(_bodyParser2.default.urlencoded({ extended: false })).use(_bodyParser2.default.json()).use(_express2.default.static(PUBLIC_PATH)).use('/api', _api2.default).get('*', function (req, res) {
	res.sendFile(PUBLIC_PATH + '/index.html');
}).use(function (err, req, res) {
	console.error(err);
	res.status(err.status || 500).send(err.message || 'Internal server error');
});

exports.default = _default;


if (module === __webpack_require__.c[__webpack_require__.s]) {
	_db2.default.syncAndLaunch(function () {
		console.log('successfully synced database');
		var server = app.listen(_.port, function () {
			console.log('connected');

			var _server$address = server.address(),
			    address = _server$address.address;

			var host = address === '::' ? 'localhost' : address;
			var urlSafeHost = host.includes(':') ? '[' + host + ']' : host;
			console.log('Listening on http://' + urlSafeHost + ':' + _.port);
		});
	});
}
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(PUBLIC_PATH, 'PUBLIC_PATH', '/Users/Kidokeisuke/bitcraft/server/index.js');

	__REACT_HOT_LOADER__.register(app, 'app', '/Users/Kidokeisuke/bitcraft/server/index.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/server/index.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
	"name": "faye",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "mocha --compilers js:babel-register --watch-extensions js,jsx tests/**/*.test.js",
		"build": "webpack",
		"start": "node ./dist/server",
		"start-dev": "NODE_ENV=development webpack & NODE_ENV=development nodemon ./dist/server",
		"start-prod": "NODE_ENV=production webpack && npm run start"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"dependencies": {
		"body-parser": "^1.17.2",
		"express": "^4.15.3",
		"history": "^4.6.3",
		"morgan": "^1.8.2",
		"pg": "^6.4.1",
		"react": "^16.0.0",
		"react-dom": "^16.0.0",
		"react-redux": "^5.0.5",
		"react-router": "^4.2.0",
		"react-router-dom": "^4.2.2",
		"redux": "^3.7.2",
		"redux-devtools-extension": "^2.13.2",
		"redux-logger": "^3.0.6",
		"redux-thunk": "^2.2.0",
		"sequelize": "^4.3.2"
	},
	"devDependencies": {
		"awesome-typescript-loader": "^3.3.0",
		"babel-core": "^6.25.0",
		"babel-loader": "^7.1.1",
		"babel-preset-env": "^1.6.1",
		"babel-preset-react": "^6.24.1",
		"babel-register": "^6.24.1",
		"chai": "^4.1.0",
		"compression-webpack-plugin": "^1.0.0",
		"enzyme": "^3.0.0",
		"eslint": "^4.11.0",
		"eslint-config-airbnb": "^16.1.0",
		"eslint-plugin-import": "^2.8.0",
		"eslint-plugin-jsx-a11y": "^6.0.2",
		"eslint-plugin-react": "^7.4.0",
		"mocha": "^3.4.2",
		"react-hot-loader": "^3.1.2",
		"supertest": "^3.0.0",
		"webpack": "^3.2.0",
		"webpack-bundle-analyzer": "^2.9.1",
		"webpack-dev-middleware": "^1.12.0",
		"webpack-hot-middleware": "^2.20.0",
		"webpack-merge": "^4.1.1",
		"webpack-node-externals": "^1.6.0"
	}
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("process");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _sequelize = __webpack_require__(7);

var _sequelize2 = _interopRequireDefault(_sequelize);

var _db = __webpack_require__(6);

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STRING = _sequelize2.default.STRING,
    VIRTUAL = _sequelize2.default.VIRTUAL;


var schema = {
	name: STRING,
	email: {
		type: STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true
		}
	},
	google_id: STRING,
	password_digest: STRING,
	password: VIRTUAL
};

var options = {};

var User = _db2.default.define('user', schema, options);
// define instance methods

var _default = User;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(STRING, 'STRING', '/Users/Kidokeisuke/bitcraft/db/models/user.js');

	__REACT_HOT_LOADER__.register(VIRTUAL, 'VIRTUAL', '/Users/Kidokeisuke/bitcraft/db/models/user.js');

	__REACT_HOT_LOADER__.register(schema, 'schema', '/Users/Kidokeisuke/bitcraft/db/models/user.js');

	__REACT_HOT_LOADER__.register(options, 'options', '/Users/Kidokeisuke/bitcraft/db/models/user.js');

	__REACT_HOT_LOADER__.register(User, 'User', '/Users/Kidokeisuke/bitcraft/db/models/user.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/db/models/user.js');
}();

;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _webpack = __webpack_require__(3);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = __webpack_require__(17);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = __webpack_require__(18);

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpack3 = __webpack_require__(19);

var _webpack4 = _interopRequireDefault(_webpack3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// webpack config is an array, [0: clientConfig, 1: serverConfig]
/* eslint-disable import/no-extraneous-dependencies */
var clientConfig = _webpack4.default[0];
var compiler = (0, _webpack2.default)(clientConfig);

var _default = router.use((0, _webpackDevMiddleware2.default)(compiler, {
	noInfo: true,
	publicPath: clientConfig.output.publicPath
})).use((0, _webpackHotMiddleware2.default)(compiler, {
	quiet: true
}));

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(router, 'router', '/Users/Kidokeisuke/bitcraft/server/hmr.js');

	__REACT_HOT_LOADER__.register(clientConfig, 'clientConfig', '/Users/Kidokeisuke/bitcraft/server/hmr.js');

	__REACT_HOT_LOADER__.register(compiler, 'compiler', '/Users/Kidokeisuke/bitcraft/server/hmr.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/server/hmr.js');
}();

;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// const npmEvent = process.env.npm_lifecycle_event;
module.exports = __webpack_require__(20);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-extraneous-dependencies */
var _require = __webpack_require__(0),
    env = _require.env;

var clientConfig = __webpack_require__(21);
var serverConfig = __webpack_require__(23);
var applyBaseConfig = __webpack_require__(25)(env);

module.exports = [clientConfig, serverConfig].map(applyBaseConfig);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(applyBaseConfig, 'applyBaseConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/index.js');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-extraneous-dependencies */
var webpack = __webpack_require__(3);
var merge = __webpack_require__(4);
var CompressionPlugin = __webpack_require__(22);

var _require = __webpack_require__(2),
    join = _require.join;

var _require2 = __webpack_require__(0),
    root = _require2.root;

var PATHS = {
	entry: join(root, 'client'),
	output: join(root, 'dist/public')
};

var commonConfig = {
	entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client', PATHS.entry],
	output: {
		path: PATHS.output,
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '*']
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: ['react-hot-loader/webpack', 'awesome-typescript-loader']
		}]
	}
};

var prodConfig = {
	plugins: [new webpack.optimize.UglifyJsPlugin({
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
	}), new webpack.optimize.AggressiveMergingPlugin(), new CompressionPlugin({
		asset: '[path].gz[query]',
		algorithm: 'gzip',
		test: /\.js$|\.css$|\.html$/,
		threshold: 10240,
		minRatio: 0.8
	})]
};

var devConfig = {
	output: {
		hotUpdateChunkFilename: 'hot/hot-update.js',
		hotUpdateMainFilename: 'hot/hot-update.json'
	},
	plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()]
};

module.exports = function (env) {
	return env.NODE_ENV === 'production' ? merge(commonConfig, prodConfig) : merge(commonConfig, devConfig);
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(PATHS, 'PATHS', '/Users/Kidokeisuke/bitcraft/webpack_config/client.js');

	__REACT_HOT_LOADER__.register(commonConfig, 'commonConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/client.js');

	__REACT_HOT_LOADER__.register(prodConfig, 'prodConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/client.js');

	__REACT_HOT_LOADER__.register(devConfig, 'devConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/client.js');
}();

;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("compression-webpack-plugin");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-extraneous-dependencies */
var nodeExternals = __webpack_require__(24);
var merge = __webpack_require__(4);

var _require = __webpack_require__(2),
    join = _require.join;

var _require2 = __webpack_require__(0),
    root = _require2.root;

var PATHS = {
	entry: join(root, 'server'),
	output: join(root, 'dist/server')
};

var commonConfig = {
	entry: PATHS.entry,
	target: 'node',
	externals: [nodeExternals()],
	output: {
		path: PATHS.output,
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	}
};

var prodConfig = {};

var devConfig = {};

module.exports = function (env) {
	return env.NODE_ENV === 'production' ? merge(commonConfig, prodConfig) : merge(commonConfig, devConfig);
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(PATHS, 'PATHS', '/Users/Kidokeisuke/bitcraft/webpack_config/server.js');

	__REACT_HOT_LOADER__.register(commonConfig, 'commonConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/server.js');

	__REACT_HOT_LOADER__.register(prodConfig, 'prodConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/server.js');

	__REACT_HOT_LOADER__.register(devConfig, 'devConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/server.js');
}();

;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-extraneous-dependencies */
var webpack = __webpack_require__(3);
var merge = __webpack_require__(4);

var commonConfig = {
	resolve: {
		extensions: ['.js', '.jsx', '.json', '*']
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
};

var prodConfig = {
	plugins: [new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"production"'
		}
	})]
};

var devConfig = {
	devtool: 'cheap-source-map',
	plugins: [new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"development"'
		}
	})]
};

module.exports = function (env) {
	var envConfig = env.NODE_ENV === 'production' ? prodConfig : devConfig;

	return function (factory) {
		return merge(commonConfig, envConfig, factory(env));
	};
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(commonConfig, 'commonConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/base.js');

	__REACT_HOT_LOADER__.register(prodConfig, 'prodConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/base.js');

	__REACT_HOT_LOADER__.register(devConfig, 'devConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/base.js');
}();

;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _user = __webpack_require__(27);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var _default = router.use('/user', _user2.default).use(function (req, res, next) {
	var err = new Error('not found');
	err.status = 404;
	next(err);
});

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(router, 'router', '/Users/Kidokeisuke/bitcraft/server/api/index.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/server/api/index.js');
}();

;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _db = __webpack_require__(5);

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var User = _db2.default.model('user');

router.param('id', function (req, res, next, id) {
	User.findById(id).then(function (user) {
		if (!user) {
			return res.sendStatus(404);
		}

		req.targetUser = user;
		next();
		return null;
	}).catch(next);
});

router.route('/').get(function (req, res, next) {
	User.findAll().then(function (users) {
		return res.json(users);
	}).catch(next);
});

var _default = router;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(router, 'router', '/Users/Kidokeisuke/bitcraft/server/api/user.js');

	__REACT_HOT_LOADER__.register(User, 'User', '/Users/Kidokeisuke/bitcraft/server/api/user.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/server/api/user.js');
}();

;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map