(function () {
    'use strict';

    angular
        .module('logpoc')
        .service('actionsLogger', actionLoggerService);

    
    function actionLoggerService() {
        var userActionQueue = [];

        this.exposedFn = logAction;

        ////////////////

        function logAction(action, data) {
            var actionObjec
        }
    }
})();