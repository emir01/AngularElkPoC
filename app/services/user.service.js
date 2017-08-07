(function() {
    'use strict';

    angular
        .module('logpoc')
        .service('userservice', userservice);

    function userservice() {
        this.exposedFn = exposedFn;
        
        ////////////////

        function exposedFn() { }
        }
})();