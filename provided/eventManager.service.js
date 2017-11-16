/*global angular*/
'use strict';

var EventManager = require('./eventManager');

angular.
    module('provided').
    factory('EventManager', function () {
        function create() {
            return new EventManager();
        }

        return {
            create: create
        };
    });
