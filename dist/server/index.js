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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// define constants such as env
// module.exports getters that check for environment variables
// some how make symlink work like bones
var pkg = __webpack_require__(11);
var process = __webpack_require__(12);

var env = process.env;


module.exports = {
	get baseUrl() {
		return env.BASE_URL || 'http://localhost:' + module.exports.port;
	},
	get root() {
		return process.cwd();
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

module.exports = require("path");

/***/ }),
/* 2 */
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
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(cleanInput, 'cleanInput', '/Users/Kidokeisuke/bitcraft/src/utils/tcp.js');

	__REACT_HOT_LOADER__.register(messageToBrowser, 'messageToBrowser', '/Users/Kidokeisuke/bitcraft/src/utils/tcp.js');

	__REACT_HOT_LOADER__.register(messageToTerminal, 'messageToTerminal', '/Users/Kidokeisuke/bitcraft/src/utils/tcp.js');

	__REACT_HOT_LOADER__.register(messageFromSelf, 'messageFromSelf', '/Users/Kidokeisuke/bitcraft/src/utils/tcp.js');
}();

;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("webpack-merge");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

var _morgan = __webpack_require__(9);

var _morgan2 = _interopRequireDefault(_morgan);

var _express = __webpack_require__(6);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(10);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _Root = __webpack_require__(0);

var _tcp = __webpack_require__(13);

var _tcp2 = _interopRequireDefault(_tcp);

var _send = __webpack_require__(22);

var _send2 = _interopRequireDefault(_send);

var _hmr = __webpack_require__(23);

var _hmr2 = _interopRequireDefault(_hmr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PUBLIC_PATH = _path2.default.join(_Root.root, 'dist/public');

var app = (0, _express2.default)();

var _default = app.use(_Root.env.NODE_ENV === 'development' ? _hmr2.default : function (req, res, next) {
	return next();
}).use((0, _morgan2.default)('dev')).use(_bodyParser2.default.urlencoded({ extended: false })).use(_bodyParser2.default.json()).use('/public', _express2.default.static(PUBLIC_PATH)).get('*', _send2.default).use(function (err, req, res) {
	console.error(err);
	res.status(err.status || 500).send(err.message || 'Internal server error');
});

exports.default = _default;


if (module === __webpack_require__.c[__webpack_require__.s]) {
	var server = app.listen(_Root.port, function () {
		console.log('connected HTML server');

		var _server$address = server.address(),
		    address = _server$address.address;

		var host = address === '::' ? 'localhost' : address;
		var urlSafeHost = host.includes(':') ? '[' + host + ']' : host;
		console.log('Listening HTML connection on http://' + urlSafeHost + ':' + _Root.port);
	});

	(0, _tcp2.default)(server);
}
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(PUBLIC_PATH, 'PUBLIC_PATH', '/Users/Kidokeisuke/bitcraft/src/server/index.js');

	__REACT_HOT_LOADER__.register(app, 'app', '/Users/Kidokeisuke/bitcraft/src/server/index.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/src/server/index.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
	"name": "faye-chat",
	"version": "0.0.1",
	"description": "Faye Chat",
	"main": "index.js",
	"scripts": {
		"test": "mocha --compilers js:babel-register --watch-extensions js,jsx tests/**/*.test.js",
		"build": "webpack",
		"start": "node ./dist/server",
		"start-dev": "NODE_ENV=development webpack -w & NODE_ENV=development node ./dist/server",
		"start-prod": "NODE_ENV=production webpack && npm run start"
	},
	"keywords": [],
	"author": "bitcraft",
	"license": "Proprietary",
	"private": true,
	"dependencies": {
		"body-parser": "^1.17.2",
		"express": "^4.15.3",
		"faye": "^1.2.4",
		"history": "^4.6.3",
		"morgan": "^1.8.2",
		"ramda": "^0.25.0",
		"react": "^16.0.0",
		"react-dom": "^16.0.0",
		"react-redux": "^5.0.5",
		"redux": "^3.7.2",
		"redux-devtools-extension": "^2.13.2",
		"redux-logger": "^3.0.6",
		"redux-thunk": "^2.2.0",
		"rxjs": "^5.5.2",
		"styled-components": "^2.2.3"
	},
	"devDependencies": {
		"babel-core": "^6.25.0",
		"babel-eslint": "^8.0.2",
		"babel-loader": "^7.1.1",
		"babel-plugin-transform-object-rest-spread": "^6.26.0",
		"babel-preset-env": "^1.6.1",
		"babel-preset-react": "^6.24.1",
		"babel-preset-stage-0": "^6.24.1",
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
		"prop-types": "^15.6.0",
		"react-hot-loader": "^3.1.2",
		"supertest": "^3.0.0",
		"webpack": "^3.2.0",
		"webpack-dev-middleware": "^1.12.0",
		"webpack-hot-middleware": "^2.20.0",
		"webpack-merge": "^4.1.1",
		"webpack-node-externals": "^1.6.0"
	}
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("process");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _faye = __webpack_require__(14);

var _faye2 = _interopRequireDefault(_faye);

var _net = __webpack_require__(15);

var _net2 = _interopRequireDefault(_net);

var _Root = __webpack_require__(0);

var _sockets = __webpack_require__(16);

var _sockets2 = _interopRequireDefault(_sockets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(HTMLServer) {
	var bae = new _faye2.default.NodeAdapter({
		mount: '/faye',
		timeout: 45
	});
	var newSocket = (0, _sockets2.default)(bae);
	var server = _net2.default.createServer(newSocket);

	bae.attach(HTMLServer);

	server.on('error', function (err) {
		throw err;
	});
	server.listen(_Root.tPort, function () {
		console.log('connected TCP server');
		console.log('Listening TCP connection on', _Root.tPort);
	});
};

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/src/server/tcp/index.js');
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("faye");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tcp = __webpack_require__(2);

var _handshake = __webpack_require__(17);

var _handshake2 = _interopRequireDefault(_handshake);

var _faye = __webpack_require__(19);

var _faye2 = _interopRequireDefault(_faye);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sockets = new Set();

var createHandlers = function createHandlers(client) {
	return {
		onData: function onData(socket, data) {
			var cleanData = (0, _tcp.cleanInput)(data);

			if (cleanData === '@quit') {
				socket.end('bye\n');
			} else {
				client.publish('/message', {
					content: cleanData,
					timestamp: new Date().valueOf()
				});
			}
		},

		onConnect: function onConnect(socket) {
			sockets.add(socket);

			client.publish('/user/connect');

			client.subscribe('/message', function (_message) {
				var isSelf = _message.username === client.username;
				var message = isSelf ? (0, _tcp.messageFromSelf)(_message) : _message;

				socket.write((0, _tcp.messageToTerminal)(message));
			});
		},

		onDisconnect: function onDisconnect(socket) {
			client.unsubscribeAll();
			sockets.delete(socket);
		}
	};
};

var _default = (0, _handshake2.default)(function (socket, baeClient, username) {
	var client = (0, _faye2.default)(baeClient, username);

	var _createHandlers = createHandlers(client),
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
});

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(sockets, 'sockets', '/Users/Kidokeisuke/bitcraft/src/server/tcp/sockets.js');

	__REACT_HOT_LOADER__.register(createHandlers, 'createHandlers', '/Users/Kidokeisuke/bitcraft/src/server/tcp/sockets.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/src/server/tcp/sockets.js');
}();

;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ramda = __webpack_require__(3);

var _Root = __webpack_require__(0);

var _tcp = __webpack_require__(2);

var _validations = __webpack_require__(18);

var handleInput = function handleInput(socket) {
	return new Promise(function (res, rej) {
		socket.on('data', function handleResponse(data) {
			var username = (0, _tcp.cleanInput)(data);
			var error = (0, _validations.username)(username);

			socket.removeListener('data', handleResponse);

			return error ? rej(error) : res(username);
		});
	});
};

/* hacky... will be called before require(./sockets).default is called */
var handleHandshake = function handleHandshake(nextFn) {
	return (0, _ramda.curry)(function (bae, socket) {
		var _error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

		socket.write(_error ? 'Failed: ' + _error + '\nTry again!\n' : 'Welcome to the chat! Give yourself a username!\n');

		handleInput(socket).then(function (username) {
			return nextFn(socket, bae.getClient(_Root.baseUrl + '/faye'), username);
		}, function (error) {
			return handleHandshake(nextFn)(bae, socket, error);
		});
	});
};

var _default = handleHandshake;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(handleInput, 'handleInput', '/Users/Kidokeisuke/bitcraft/src/server/tcp/handshake.js');

	__REACT_HOT_LOADER__.register(handleHandshake, 'handleHandshake', '/Users/Kidokeisuke/bitcraft/src/server/tcp/handshake.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/src/server/tcp/handshake.js');
}();

;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* eslint-disable import/prefer-default-export */
var username = exports.username = function username() {
	var _username = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	var error = '';

	if (!/^\w+$/.test(_username)) {
		error += 'username must consist of alphabets';
	}

	return error;
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(username, 'username', '/Users/Kidokeisuke/bitcraft/src/utils/validations.js');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ramda = __webpack_require__(3);

var _faye = __webpack_require__(20);

var _tcp = __webpack_require__(2);

/* store subscriptions */
var channelManager = {};
var clientManager = {};

var subscribeChannel = (0, _ramda.curry)(function (client, channel) {
	var channelSub = channelManager[channel];

	if (!channelSub) {
		channelSub = (0, _faye.createChannel)(client, channel);
	}

	return channelSub;
});

var createMessage = (0, _ramda.curry)(_tcp.messageToBrowser);

/* create faye client actions to be used by tcp socket */

var _default = function _default(client, username) {
	var subsribeClientChannel = subscribeChannel(client);
	var createClientMessage = createMessage(username);
	var clientSubscriptions = {};

	return {
		username: username,

		publish: function publish(channel) {
			var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			client.publish(channel, createClientMessage(message));
		},
		subscribe: function subscribe(channel, callback) {
			var channel$ = subsribeClientChannel(channel);

			clientSubscriptions[channel] = channel$.subscribe(callback);
			clientManager[username] = clientSubscriptions;
		},
		unsubscribe: function unsubscribe(channel) {
			clientSubscriptions[channel].unsubscribe();
			delete clientSubscriptions[channel];
		},
		unsubscribeAll: function unsubscribeAll() {
			(0, _faye.unsubscribeChannels)(this.unsubscribe, clientSubscriptions);
		}
	};
};

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(channelManager, 'channelManager', '/Users/Kidokeisuke/bitcraft/src/server/tcp/faye.js');

	__REACT_HOT_LOADER__.register(clientManager, 'clientManager', '/Users/Kidokeisuke/bitcraft/src/server/tcp/faye.js');

	__REACT_HOT_LOADER__.register(subscribeChannel, 'subscribeChannel', '/Users/Kidokeisuke/bitcraft/src/server/tcp/faye.js');

	__REACT_HOT_LOADER__.register(createMessage, 'createMessage', '/Users/Kidokeisuke/bitcraft/src/server/tcp/faye.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/src/server/tcp/faye.js');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.unsubscribeChannels = exports.createChannel = undefined;

var _rxjs = __webpack_require__(21);

var _rxjs2 = _interopRequireDefault(_rxjs);

var _ramda = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var observableFactory = function observableFactory(handlerFn) {
	return (0, _ramda.compose)(_rxjs2.default.Observable.create, handlerFn);
};
var multicastFactory = function multicastFactory(observable) {
	return observable.multicast(new _rxjs2.default.Subject());
};

var channelObservableFactory = observableFactory(function (client, channel) {
	return function (obs) {
		var subscription = client.subscribe(channel, function (message) {
			return obs.next(message);
		});

		return {
			unsubscribe: function unsubscribe() {
				return subscription.cancel();
			}
		};
	};
});

/*
	creates observable multicast with refcount which automatically connects upon subscription and
	unconnects when all subscribers unsubscribe
*/
var createChannel = exports.createChannel = (0, _ramda.compose)((0, _ramda.invoker)(0, 'refCount'), multicastFactory, channelObservableFactory);

var unsubscribeChannels = exports.unsubscribeChannels = function unsubscribeChannels(unsubscribeFn, managerObj) {
	return (0, _ramda.mapObjIndexed)(function (_, channel) {
		return unsubscribeFn(channel);
	}, managerObj);
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(createChannel, 'createChannel', '/Users/Kidokeisuke/bitcraft/src/utils/faye.js');

	__REACT_HOT_LOADER__.register(unsubscribeChannels, 'unsubscribeChannels', '/Users/Kidokeisuke/bitcraft/src/utils/faye.js');

	__REACT_HOT_LOADER__.register(observableFactory, 'observableFactory', '/Users/Kidokeisuke/bitcraft/src/utils/faye.js');

	__REACT_HOT_LOADER__.register(multicastFactory, 'multicastFactory', '/Users/Kidokeisuke/bitcraft/src/utils/faye.js');

	__REACT_HOT_LOADER__.register(channelObservableFactory, 'channelObservableFactory', '/Users/Kidokeisuke/bitcraft/src/utils/faye.js');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Root = __webpack_require__(0);

var html = '\n\t<!doctype html>\n\t<html>\n\t\t<head>\n\t\t\t<title>faye chat</title>\n\t\t</head>\n\t\t<body>\n\t\t\t<div id="app"></div>\n\t\t\t<script type="text/javascript" src=' + _Root.baseUrl + '/faye/client.js></script>\n\t\t\t<script src="public/bundle.js"></script>\n\t\t</body>\n\t</html>\n';

var _default = function _default(req, res) {
	res.send(html);
};

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(html, 'html', '/Users/Kidokeisuke/bitcraft/src/server/send.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/src/server/send.js');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(6);

var _express2 = _interopRequireDefault(_express);

var _webpack = __webpack_require__(4);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = __webpack_require__(24);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = __webpack_require__(25);

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpack3 = __webpack_require__(26);

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

	__REACT_HOT_LOADER__.register(router, 'router', '/Users/Kidokeisuke/bitcraft/src/server/hmr.js');

	__REACT_HOT_LOADER__.register(clientConfig, 'clientConfig', '/Users/Kidokeisuke/bitcraft/src/server/hmr.js');

	__REACT_HOT_LOADER__.register(compiler, 'compiler', '/Users/Kidokeisuke/bitcraft/src/server/hmr.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/Kidokeisuke/bitcraft/src/server/hmr.js');
}();

;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// const npmEvent = process.env.npm_lifecycle_event;
module.exports = __webpack_require__(27);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-extraneous-dependencies */
var _require = __webpack_require__(0),
    env = _require.env;

var clientConfig = __webpack_require__(28);
var serverConfig = __webpack_require__(30);
var applyBaseConfig = __webpack_require__(32)(env);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-extraneous-dependencies */
var webpack = __webpack_require__(4);
var merge = __webpack_require__(5);
var CompressionPlugin = __webpack_require__(29);

var _require = __webpack_require__(1),
    join = _require.join;

var _require2 = __webpack_require__(0),
    root = _require2.root;

var PATHS = {
	entry: join(root, 'src/client'),
	output: join(root, 'dist/public'),
	components: join(root, 'src/client/components'),
	constants: join(root, 'src/client/constants.js'),
	reducers: join(root, 'src/client/reducers')
};

var commonConfig = {
	entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client', PATHS.entry],
	output: {
		path: PATHS.output,
		filename: 'bundle.js',
		publicPath: '/public'
	},
	resolve: {
		alias: {
			Components: PATHS.components,
			Constants: PATHS.constants,
			Reducers: PATHS.reducers,
			Utils: PATHS.utils
		},
		extensions: ['.js', '.jsx', '.json', '*']
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
/* 29 */
/***/ (function(module, exports) {

module.exports = require("compression-webpack-plugin");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-extraneous-dependencies */
var nodeExternals = __webpack_require__(31);
var merge = __webpack_require__(5);

var _require = __webpack_require__(1),
    join = _require.join;

var _require2 = __webpack_require__(0),
    root = _require2.root;

var PATHS = {
	entry: join(root, 'src/server'),
	output: join(root, 'dist/server'),
	root: root
};

var commonConfig = {
	entry: PATHS.entry,
	target: 'node',
	externals: [nodeExternals()],
	output: {
		path: PATHS.output,
		filename: 'index.js',
		libraryTarget: 'commonjs2'
	},
	resolve: {
		alias: {
			Root: PATHS.root
		}
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
/* 31 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable import/no-extraneous-dependencies */
var webpack = __webpack_require__(4);
var merge = __webpack_require__(5);

var _require = __webpack_require__(1),
    join = _require.join;

var _require2 = __webpack_require__(0),
    root = _require2.root;

var PATHS = {
	utils: join(root, 'src/utils')
};

var commonConfig = {
	resolve: {
		alias: {
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
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(PATHS, 'PATHS', '/Users/Kidokeisuke/bitcraft/webpack_config/base.js');

	__REACT_HOT_LOADER__.register(commonConfig, 'commonConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/base.js');

	__REACT_HOT_LOADER__.register(prodConfig, 'prodConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/base.js');

	__REACT_HOT_LOADER__.register(devConfig, 'devConfig', '/Users/Kidokeisuke/bitcraft/webpack_config/base.js');
}();

;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map