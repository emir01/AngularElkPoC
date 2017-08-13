(function () {
    'use strict';

    angular
        .module('logpoc')
        .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ["$scope", "app.events"];

    function ApplicationController($scope, appEvents) {
        var vm = this;

        vm.loggedEvents = [];

        vm.throwSimpleError = _throwSimpleError;

        activate();

        ////////////////

        function activate() {
            $scope.$on(appEvents.messageSentToElk, function (event, data) {
                vm.loggedEvents.push(data);
            });
        }

        function _throwSimpleError() {
            throw new Error("Test");
        }
    }
})();