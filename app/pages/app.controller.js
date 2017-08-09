(function () {
    'use strict';

    angular
        .module('logpoc')
        .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ["$scope"];

    function ApplicationController($scope) {
        var vm = this;

        vm.throwSimpleError = _throwSimpleError;

        activate();
 
        ////////////////

        function activate() { }

        function _throwSimpleError() {
            throw new Error("Test");
        }
    }
})();