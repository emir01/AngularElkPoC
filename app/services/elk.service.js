(function () {
    'use strict';

    angular
        .module('logpoc')
        .service('ElkLogger', ElkLogger);

    function ElkLogger() {
        this.logToElk = logToElk;

        function logToElk() {
                console.log("Sending to Elk");
        }
    }
})();