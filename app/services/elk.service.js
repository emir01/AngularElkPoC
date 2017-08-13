(function () {
    'use strict';

    angular
        .module('logpoc')
        .service('elkLoggerService', elkLoggerService);

    elkLoggerService.$inject = ["$http", "$state", "$rootScope", "app.events"];

    function elkLoggerService($http, $state, $rootScope, appEvents) {

        this.logToElk = logToElk;
        this.logToElkWithEnrichment = logToElkWithEnrichment;

        function logToElk(objectForElk) {
            console.log("Sending to Elk: ");
            console.log(JSON.stringify(objectForElk));
        }

        function logToElkWithEnrichment(objectForElk) {

            var currentState = $state.current;
            var currentTime = new Date();

            objectForElk.timestamp = currentTime;
            objectForElk.state = currentState;

            _processStack(objectForElk);

            _sendToElk(objectForElk);

            $rootScope.$broadcast(appEvents.messageSentToElk, objectForElk);
        }

        function _processStack(objectForElk) {
            
            var splitErrorStack = objectForElk.stack.split('\n');

            for (var i = 0; i < splitErrorStack.length; i++) {
                splitErrorStack[i] = splitErrorStack[i].trim();
            }

            return objectForElk.stack = splitErrorStack;
        }

        function _sendToElk(object) {
            // http send
            console.log(JSON.stringify(object));
        }
    }
})();