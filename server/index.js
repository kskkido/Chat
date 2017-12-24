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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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

var _process = process,
    env = _process.env;


module.exports = {
	get baseUrl() {
		return env.BASE_URL || 'http://localhost:' + module.exports.port;
	},
	get fayeUrl() {
		return module.exports.baseUrl + '/faye';
	},
	get name() {
		return pkg.name;
	},
	get port() {
		return env.PORT || 1337;
	},
	get tPort() {
		return module.exports.port !== 8000 ? 8000 : 8888;
	},
	root: process.cwd(),
	pkg: pkg,
	env: env
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

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
/***/ (function(module, exports) {

module.exports = require("faye");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ramda = __webpack_require__(7);

var _tcp = __webpack_require__(8);

var _validations = __webpack_require__(15);

var _validations2 = _interopRequireDefault(_validations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onInput = function onInput(socket) {
	return new Promise(function (res, rej) {
		socket.on('data', function response(data) {
			var username = (0, _tcp.cleanInput)(data);
			var error = (0, _validations2.default)(username);

			socket.removeListener('data', response);

			return error ? rej(error) : res(username);
		});
	});
};

/*  will be partially applied with .require('./sockets').default */
var onHandshake = (0, _ramda.curry)(function (nextFn, socket) {
	var _error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

	socket.write(_error ? 'Failed: ' + _error + '\nTry again!\n' : 'Welcome to the chat! Give yourself a username!\n');

	onInput(socket).then(function (username) {
		return nextFn(socket, username);
	}, function (error) {
		return onHandshake(nextFn, socket, error);
	});
});

exports.default = onHandshake;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* cleans up incoming socket data to useable data */
var cleanInput = exports.cleanInput = function cleanInput(data) {
	return data.toString().replace(/(\r\n|\n|\r)/gm, '');
};

var messageToBrowser = exports.messageToBrowser = function messageToBrowser(username, messageObj) {
	return Object.assign({ username: username }, messageObj);
};

var messageToTerminal = exports.messageToTerminal = function messageToTerminal(_ref) {
	var content = _ref.content,
	    username = _ref.username,
	    timestamp = _ref.timestamp;
	return '\n---------------------\ntime: ' + new Date(timestamp).toLocaleString() + '\nusername: ' + username + '\ncontent: ' + content + '\n---------------------\n';
};

var messageFromSelf = exports.messageFromSelf = function messageFromSelf(message) {
	var username = message.username;


	return Object.assign({}, message, { username: '[ ' + username + ' ]' });
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(11);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _Root = __webpack_require__(0);

var _tcp = __webpack_require__(13);

var _tcp2 = _interopRequireDefault(_tcp);

var _dev = __webpack_require__(21);

var _dev2 = _interopRequireDefault(_dev);

var _page = __webpack_require__(34);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PUBLIC_PATH = _path2.default.join(_Root.root, 'dist');

var app = (0, _express2.default)();

exports.default = app.use(_dev2.default).use(_bodyParser2.default.urlencoded({ extended: false })).use(_bodyParser2.default.json()).use('/dist', _express2.default.static(PUBLIC_PATH)).get('*', _page2.default).use(function (err, req, res) {
	console.error(err);
	res.status(err.status || 500).send(err.message || 'Internal server error');
});


if (module === __webpack_require__.c[__webpack_require__.s]) {
	var server = app.listen(_Root.port, function () {
		console.log('connected HTML server');

		var _server$address = server.address(),
		    address = _server$address.address;

		var host = address === '::' ? 'localhost' : address;
		var urlSafeHost = host.includes(':') ? '[' + host + ']' : host;
		console.log('Listening HTML connection on http://' + urlSafeHost + ':' + _Root.port);
	});

	/* connect tcp server */
	(0, _tcp2.default)(server);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"name":"faye-chat","version":"0.0.1","description":"Faye Chat","main":"index.js","scripts":{"build":"webpack","build-dev":"NODE_ENV=development webpack","build-prod":"NODE_ENV=production webpack","start":"node ./server","start-dev":"npm run build-dev -w & NODE_ENV=development npm run start","start-prod":"npm run start-dev && NODE_ENV=production npm run start","heroku-postbuild":"node ./heroku-build.js"},"keywords":[],"author":"","dependencies":{"body-parser":"^1.17.2","express":"^4.15.3","faye":"^1.2.4","history":"^4.6.3","morgan":"^1.8.2","ramda":"^0.25.0","react":"^16.0.0","react-dom":"^16.0.0","react-redux":"^5.0.5","redux":"^3.7.2","redux-devtools-extension":"^2.13.2","redux-logger":"^3.0.6","redux-thunk":"^2.2.0","styled-components":"^2.2.3"},"devDependencies":{"babel-core":"^6.25.0","babel-eslint":"^8.0.2","babel-loader":"^7.1.1","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1","babel-preset-stage-0":"^6.24.1","chai":"^4.1.0","compression-webpack-plugin":"^1.0.0","enzyme":"^3.0.0","eslint":"^4.11.0","eslint-config-airbnb":"^16.1.0","eslint-import-resolver-webpack":"^0.8.3","eslint-plugin-import":"^2.8.0","eslint-plugin-jsx-a11y":"^6.0.2","eslint-plugin-react":"^7.4.0","mocha":"^3.4.2","prop-types":"^15.6.0","react-hot-loader":"^3.1.2","source-map-support":"^0.5.0","webpack":"^3.10.0","webpack-dev-middleware":"^1.12.0","webpack-hot-middleware":"^2.20.0","webpack-merge":"^4.1.1","webpack-node-externals":"^1.6.0"}}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _faye = __webpack_require__(5);

var _faye2 = _interopRequireDefault(_faye);

var _net = __webpack_require__(14);

var _net2 = _interopRequireDefault(_net);

var _Root = __webpack_require__(0);

var _handshake = __webpack_require__(6);

var _handshake2 = _interopRequireDefault(_handshake);

var _sockets = __webpack_require__(16);

var _sockets2 = _interopRequireDefault(_sockets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (HTMLServer) {
	var bae = new _faye2.default.NodeAdapter({
		mount: '/faye',
		timeout: 45
	});
	var onNewsocket = (0, _handshake2.default)(_sockets2.default);
	var server = _net2.default.createServer(onNewsocket);

	bae.attach(HTMLServer);

	server.on('error', function (err) {
		throw err;
	});
	server.listen(_Root.tPort, function () {
		console.log('connected TCP server');
		console.log('Listening TCP connection on', _Root.tPort);
	});
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var username = function username() {
	var _username = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	var error = '';

	if (!/^\w+$/.test(_username)) {
		error += 'name cannot contain space or special characters';
	}

	return error;
};

exports.default = username;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tcp = __webpack_require__(8);

var _handshake = __webpack_require__(6);

var _handshake2 = _interopRequireDefault(_handshake);

var _faye = __webpack_require__(17);

var _faye2 = _interopRequireDefault(_faye);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sockets = new Set();

var createHandlers = function createHandlers(client, username) {
	var subscription = void 0;

	return {
		onData: function onData(socket, data) {
			var cleanData = (0, _tcp.cleanInput)(data);

			if (cleanData === '@quit') {
				socket.end('bye\n');
			} else {
				client.publish('/message', {
					username: username,
					content: cleanData,
					timestamp: new Date().valueOf()
				});
			}
		},

		onConnect: function onConnect(socket) {
			sockets.add(socket);

			client.publish('/user/connect', { username: username });

			subscription = client.subscribe('/message', function (_, _message) {
				var isSelf = _message.username === username;
				var message = isSelf ? (0, _tcp.messageFromSelf)(_message) : _message;

				socket.write((0, _tcp.messageToTerminal)(message));
			});
		},

		onDisconnect: function onDisconnect(socket) {
			if (subscription) {
				subscription.unsubscribe(true);
			}
			sockets.delete(socket);
		}
	};
};

exports.default = function (socket, username) {
	var client = (0, _faye2.default)();

	var _createHandlers = createHandlers(client, username),
	    onConnect = _createHandlers.onConnect,
	    onDisconnect = _createHandlers.onDisconnect,
	    onData = _createHandlers.onData;

	socket.write('Hi, ' + username + '! Get yappin\n', function () {
		return onConnect(socket);
	});
	socket.on('data', function (data) {
		return onData(socket, data);
	});
	socket.on('end', function () {
		return onDisconnect(socket);
	});
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _faye = __webpack_require__(5);

var _faye2 = _interopRequireDefault(_faye);

var _Root = __webpack_require__(0);

var _eventManager = __webpack_require__(18);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _dev = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FayeProvider = function FayeProvider() {
	var _this = this;

	_classCallCheck(this, FayeProvider);

	this.subscribe = function (channel, callback, fetchHistory) {
		// third parameter to
		var eventManager = _this.channelManager[channel];
		var needToSubscribe = false;

		if (eventManager === undefined) {
			_this.channelManager[channel] = _eventManager2.default.create();
			eventManager = _this.channelManager[channel];
			needToSubscribe = true;
		}

		if (_this.cache[channel] === undefined) {
			_this.cache[channel] = [];
		}

		var subscription = eventManager.subscribe(null, callback);
		var cacheMessages = _this.cache[channel];

		(0, _dev.logChannelCount)(eventManager, channel, false);

		if (fetchHistory && cacheMessages.length > 0) {
			cacheMessages.map(callback);
		}

		if (needToSubscribe) {
			_this.fayeManager[channel] = _this.client.subscribe(channel, function (message) {
				return FayeProvider.onChannelMessage(eventManager, message, cacheMessages);
			});
		}

		return {
			unsubscribe: function unsubscribe(disconnect) {
				subscription.unsubscribe();

				(0, _dev.logChannelCount)(eventManager, channel, false);

				if (disconnect && eventManager.subscriberCount() === 0) {
					_this.fayeManager[channel].cancel();

					delete _this.fayeManager[channel];
					delete _this.channelManager[channel];
				}
			}
		};
	};

	this.publish = function (channel, message) {
		return _this.client.publish(channel, message);
	};

	this.client = new _faye2.default.Client(_Root.fayeUrl);
	this.cache = {};
	this.channelManager = {};
	this.fayeManager = {};
};

FayeProvider.onChannelMessage = function (eventManager, message, cache) {
	eventManager.raise(null, message);

	cache.push(message);
	while (cache.length > 2000) {
		cache.shift();
	}
};

exports.default = function () {
	return new FayeProvider();
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _manager = __webpack_require__(19);

var _manager2 = _interopRequireDefault(_manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_manager2.default.create = function () {
  return new _manager2.default();
};

exports.default = _manager2.default;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/* eslint-disable */
/**
 * Initializes the EventManager instance
 * @constructor
 */
function EventManager() {
    'use strict';

    this.cleanup();
}

EventManager.prototype.cleanup = function () {
    'use strict';

    this._subscriptions = [];
};

/**
 * Subscribe to the event in order to be notified
 * @param {Object|undefined} context The execution context of the given handler callback
 * @param {RaiseHandler} handler
 * @returns {Subscription}
 */
EventManager.prototype.subscribe = function (context, handler) {
    'use strict';

    return this._subscribe(false, context, handler);
};

/**
 * Subscribe to the event in order to be notified,
 * but notified only once and then the event is automatically unsubscribed
 * @param {Object|undefined} context The execution context of the given handler callback
 * @param {RaiseHandler} handler
 * @returns {Subscription}
 */
EventManager.prototype.subscribeOnce = function (context, handler) {
    'use strict';

    return this._subscribe(true, context, handler);
};

/**
 *
 * @param {boolean} isOnce
 * @param {Object|undefined} context
 * @param {RaiseHandler} handler
 * @returns {Subscription}
 * @private
 */
EventManager.prototype._subscribe = function (isOnce, context, handler) {
    'use strict';
    // make sure we are given a function to call back

    if (typeof handler !== 'function') {
        throw new Error('Invalid \'handler\' argument.');
    }

    var self = this;

    var localSubscription = { context: context, handler: handler, isOnce: isOnce };
    this._subscriptions.push(localSubscription);

    //noinspection JSUnusedGlobalSymbols
    return {
        unsubscribe: function unsubscribe() {
            self._unsubscribe(localSubscription);
            // disable unsubscribe and get rid of the reference to self (let the GC do its job)
            this.unsubscribe = function () {
                return undefined;
            };
        }
    };
};

EventManager.prototype._unsubscribe = function (subscription) {
    'use strict';

    var index = this._subscriptions.indexOf(subscription);
    if (index >= 0) {
        this._subscriptions.splice(index, 1);
    }
};

/**
 * Raise the event by notifying all the subscribed handlers
 * @param {Object} [sender]
 * @param {*} [eventArg]
 */
EventManager.prototype.raise = function (sender, eventArg) {
    'use strict';

    var i;
    var subscription;
    var unsubscribeList = [];
    for (i = 0; i < this._subscriptions.length; i += 1) {
        subscription = this._subscriptions[i];
        subscription.handler.call(subscription.context, sender, eventArg);
        if (subscription.isOnce) {
            unsubscribeList.push(subscription);
        }
    }
    for (i = 0; i < unsubscribeList.length; i += 1) {
        this._unsubscribe(unsubscribeList[i]);
    }
};

/**
 * Returns true if EventManager has at least one subscriber
 */
EventManager.prototype.hasSubscriber = function () {
    'use strict';

    return this._subscriptions.length > 0;
};

/**
 * Returns the number of subscribers
 * @returns {number}
 */
EventManager.prototype.subscriberCount = function () {
    'use strict';

    return this._subscriptions.length;
};

/**
 * An event subscription handler
 * @callback SubscribeHandler
 * @param {Object} [context]
 * @param {Object} [eventArg]
 * @returns {Subscription}
 */

/**
 * @callback RaiseHandler
 * @param {*} sender
 * @param {*} eventArg
 */

/**
 * An event subscription
 * @typedef {Object} Subscription
 * @property {function} unsubscribe
 */

exports.default = EventManager;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
							value: true
});
exports.logChannelCount = undefined;

var _ramda = __webpack_require__(7);

var isDev = "production" === 'development'; /* eslint-disable prefer-template */
var logChannelCount = exports.logChannelCount = isDev ? function (eventManager, channel) {
							var browser = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

							var string =  true ? 'BROWSER ' : 'TCP' + 'CHANNEL:\n' + channel;

							console.log(string);
} : _ramda.identity;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _Root = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable global-require */
var router = _express2.default.Router();

exports.default = _Root.env.NODE_ENV === 'development' ? router.use(__webpack_require__(22).default).use(__webpack_require__(32)('dev')).use(function (req, res, next) {
	__webpack_require__(33).install();
	next();
}) : function (req, res, next) {
	return next();
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _webpack = __webpack_require__(3);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = __webpack_require__(23);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = __webpack_require__(24);

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpack3 = __webpack_require__(25);

var _webpack4 = _interopRequireDefault(_webpack3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// webpack config is an array, [0: clientConfig, 1: serverConfig]
/* eslint-disable import/no-extraneous-dependencies */
var clientConfig = _webpack4.default[0];
var compiler = (0, _webpack2.default)(clientConfig);

exports.default = router.use((0, _webpackDevMiddleware2.default)(compiler, {
	noInfo: true,
	publicPath: clientConfig.output.publicPath
})).use((0, _webpackHotMiddleware2.default)(compiler, {
	quiet: true
}));

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(26);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    env = _require.env;

var clientConfig = __webpack_require__(27);
var serverConfig = __webpack_require__(29);
var applyBaseConfig = __webpack_require__(31)(env);

module.exports = [clientConfig, serverConfig].map(applyBaseConfig);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var webpack = __webpack_require__(3);
var merge = __webpack_require__(4);
var CompressionPlugin = __webpack_require__(28);

var _require = __webpack_require__(1),
    join = _require.join;

var _require2 = __webpack_require__(0),
    root = _require2.root;

var PATHS = {
	entry: join(root, 'src/client'),
	output: join(root, 'dist'),
	actions: join(root, 'src/client/actions'),
	components: join(root, 'src/client/components'),
	constants: join(root, 'src/client/constants'),
	middlewares: join(root, 'src/client/middlewares'),
	reducers: join(root, 'src/client/reducers')
};

var commonConfig = {
	output: {
		path: PATHS.output,
		filename: 'bundle.js',
		publicPath: '/dist'
	},
	resolve: {
		alias: {
			Actions: PATHS.actions,
			Components: PATHS.components,
			Constants: PATHS.constants,
			Middlewares: PATHS.middlewares,
			Reducers: PATHS.reducers,
			Utils: PATHS.utils
		},
		extensions: ['.js', '.jsx', '.json', '*']
	}
};

var prodConfig = {
	entry: PATHS.entry,
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
	entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client', PATHS.entry],
	output: {
		hotUpdateChunkFilename: 'hot/hot-update.js',
		hotUpdateMainFilename: 'hot/hot-update.json'
	},
	plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()]
};

module.exports = function (env) {
	return env.NODE_ENV === 'production' ? merge(commonConfig, prodConfig) : merge(commonConfig, devConfig);
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("compression-webpack-plugin");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nodeExternals = __webpack_require__(30);
var merge = __webpack_require__(4);

var _require = __webpack_require__(1),
    join = _require.join;

var _require2 = __webpack_require__(0),
    root = _require2.root;

var PATHS = {
	entry: join(root, 'src/server'),
	output: join(root, 'server')
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

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var webpack = __webpack_require__(3);
var merge = __webpack_require__(4);

var _require = __webpack_require__(1),
    join = _require.join;

var _require2 = __webpack_require__(0),
    root = _require2.root;

var PATHS = {
	root: root,
	utils: join(root, 'src/utils')
};

var commonConfig = {
	resolve: {
		alias: {
			Root: PATHS.root,
			Utils: PATHS.utils
		},
		extensions: ['.js', '.jsx', '.json', '*']
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

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Root = __webpack_require__(0);

var html = '\n\t<!doctype html>\n\t<html>\n\t\t<head>\n\t\t\t<title>faye chat</title>\n\t\t</head>\n\t\t<body>\n\t\t\t<div id="app"></div>\n\t\t\t<div id="modal-overlay"></div>\n\t\t\t<script type="text/javascript" src="' + _Root.fayeUrl + '/client.js"></script>\n\t\t\t<script src="dist/bundle.js"></script>\n\t\t</body>\n\t</html>\n';

exports.default = function (req, res) {
	res.send(html);
};

/***/ })
/******/ ]);