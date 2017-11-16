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
      unsubscribe: function () {
          self._unsubscribe(localSubscription);
          // disable unsubscribe and get rid of the reference to self (let the GC do its job)
          this.unsubscribe = function () { return undefined; };
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
EventManager.prototype.subscriberCount  = function () {
  'use strict';
  return this._subscriptions.length;
};

module.exports = EventManager;

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
