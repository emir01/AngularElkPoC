(function () {
    'use strict';

    angular
        .module('logpoc')
        .config(stateConfiguration);

    stateConfiguration.$inject = ["$stateProvider", "$urlRouterProvider"];

    function stateConfiguration($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("root", {
                url: "/",
                templateUrl: "/app/pages/app.html",
                controller: "ApplicationController",
                controllerAs: "vm"
            })
    }
})();