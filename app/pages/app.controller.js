(function () {
    'use strict';

    angular
        .module('logpoc')
        .controller('ApplicationController', ApplicationController);

    function ApplicationController() {
        var vm = this;

        activate();

        ////////////////
        
        function activate() {
            throw new Error("Test");
        }
    }
})();