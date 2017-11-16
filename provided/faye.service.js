/*global angular, Faye, window*/
'use strict';

angular.
    module('provided').
    factory('Faye', [
        '$rootScope',
        '$location',
        '$log',
        'EventManager',
        function ($rootScope, $location, $log, EventManager) {
            var STATES = {
                DISCONNECTED: 0,
                CONNECTING: 1,
                CONNECTED: 2
            };

            var state = STATES.DISCONNECTED;

            // event manager
            var onConnectEventManager = EventManager.create();
            var onDisconnectEventManager = EventManager.create();

            /**
             * keep track of the subscribers
             * @type {{string: Array.<EventManager>}}
             */
            var channelEventManager = {};
            var fayeSubscriptions = {};

            // cache per channel
            var maxChannelCacheSize = 2000; // up to 2000 messages per channel
            var cache = {};

            var client = new Faye.Client(window.location.pathname + 'faye');

            client.on('transport:up', function () {
                state = STATES.CONNECTED;
                onConnectEventManager.raise(null);
            });

            client.on('transport:down', function () {
                state = STATES.DISCONNECTED;
                onDisconnectEventManager.raise(null);
            });

            /**
             * broadcast the message to all the subscribers
             * @param {string} channel
             * @param {logMessage} message
             * @param {Array.<logMessage>} cache
             */
            function onChannelMessage(channel, message, cache) {
                // do not call $rootScope.apply to avoid too many digest cycle
                // the caller *must* handle this on its side
                channelEventManager[channel].raise(null, message);

                // store the message in the cache
                cache.push(message);
                while (cache.length > maxChannelCacheSize) {
                    cache.shift();
                }
            }

            /**
             * @param {string} channel
             * @param {function(null, logMessage)} callback
             * @param {boolean} fetchHistory
             * @return {Subscription}
             */
            function subscribe(channel, callback, fetchHistory) {
                var eventManager = channelEventManager[channel];
                var cacheMessages;
                var subscription;
                var needToSubscribe = false;

                if (eventManager === undefined) {
                    eventManager = channelEventManager[channel] = EventManager.create();
                    needToSubscribe = true;
                }

                if (cache[channel] === undefined) {
                    cache[channel] = [];
                }

                subscription = eventManager.subscribe(null, callback);
                $log.info('Faye client ' +
                    eventManager.subscriberCount() +
                    ' subscribers on channel ' +
                    channel);

                cacheMessages = cache[channel];
                // send message in the cache

                if (fetchHistory) {
                    // TODO to optimize, we use a deepCopy to avoid Error: ngRepeat:dupes
                    // Duplicate Key in Repeater
                    var i;
                    if (cacheMessages.length > 0) {
                        var copyCache = cacheMessages.slice();
                        $rootScope.$applyAsync(function () {
                            for (i = 0; i < copyCache.length; i += 1) {
                                callback(null, copyCache[i]);
                            }
                        });
                    }
                }

                if (needToSubscribe) {
                    fayeSubscriptions[channel] = client.subscribe(channel, function (message) {
                        onChannelMessage(channel, message, cacheMessages);
                    });
                }

                // wrap the subscription
                return {
                    /**
                     * @param {boolean} [disconnect] Disconnect from the channel if no subscribers
                     */
                    unsubscribe: function (disconnect) {
                        subscription.unsubscribe();
                        $log.debug('Faye client ' +
                            eventManager.subscriberCount() +
                            ' subscribers on channel ' +
                            channel);

                        if (disconnect && eventManager.subscriberCount() === 0) {
                            // unsubscribe to the faye client
                            fayeSubscriptions[channel].cancel();
                            delete fayeSubscriptions[channel];

                            // clear our event manager
                            delete channelEventManager[channel];
                        }
                    }
                };
            }

            /**
             * @param callback
             * @returns {Subscription}
             */
            function onConnect(callback) {
                var subscription;

                subscription = onConnectEventManager.subscribe(null, function () {
                    $rootScope.$apply(callback);
                });

                $log.debug('Faye client ' +
                    onConnectEventManager.subscriberCount() +
                    ' subscribers on connect event');

                // trigger the callback if we are already connected
                // (usually done on the 'up' event)
                if (state === STATES.CONNECTED) {
                    callback();
                }

                // wrap the subscription
                return {
                    unsubscribe: function () {
                        subscription.unsubscribe();
                        $log.debug('Faye client ' +
                            onConnectEventManager.subscriberCount() +
                            ' subscribers on connect event');
                    }
                };
            }

            /**
             * @param callback
             * @returns {Subscription}
             */
            function onDisconnect(callback) {
                var subscription;

                subscription = onDisconnectEventManager.subscribe(null, function () {
                    $rootScope.$apply(callback);
                });

                $log.debug('Faye client ' +
                    onDisconnectEventManager.subscriberCount() +
                    ' subscribers on disconnect event');

                // trigger the callback if we are already connected
                // (usually done on the 'up' event)
                if (state === STATES.DISCONNECTED) {
                    callback();
                }

                // wrap the subscription
                return {
                    unsubscribe: function () {
                        subscription.unsubscribe();
                        $log.debug('Faye client ' +
                            onDisconnectEventManager.subscriberCount() +
                            ' subscribers on disconnect event');
                    }
                };
            }

            return {
                publish: function (channel, message) {
                    client.publish(channel, message);
                },

                subscribe: subscribe,

                onConnect: onConnect,

                onDisconnect: onDisconnect,

                getState: function () {
                    return state;
                },

                STATES: STATES
            };
        }
    ]);

/**
 * @typedef {Object} logMessage
 * @property {string} startTime
 * @property {string} categoryName
 * @property {{level: number, levelStr: string}} level
 * @property {Array.<string>} data the log data, data[0] === string
 */