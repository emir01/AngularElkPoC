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
            console.log("Sending to Elk: ");

            var currentState = $state.current;
            var currentTime = new Date();

            objectForElk.timestamp = currentTime;
            objectForElk.state = currentState;

            _sendToElk(objectForElk);
            $rootScope.$broadcast(appEvents.messageSentToElk);
        }

        function _sendToElk(object){
            // http senmd
            console.log(JSON.stringify(object));
        }
    }
})();