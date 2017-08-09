(function (angular) {
    "use strict";

    angular.module("logpoc")
        .config(exceptionConfig);

    exceptionConfig.$inject = ["$provide"];

    function exceptionConfig($provide) {
        $provide.decorator("$exceptionHandler", extendExceptionHandler);
    }

    extendExceptionHandler.$inject = ["$delegate", "$injector", "$state"];

    function extendExceptionHandler($delegate, $injector) {
        return function (exception, cause, stackTrace) {
            $delegate(exception, cause);

            var errorData = {
                message: exception.message,
                stack: exception.stack,
                cause: cause,
            };

            var elkService = $injector.get("elkLoggerService");

            elkService.logToElkWithEnrichment(errorData);

            /**
             * Here we could add the error to a service's collection,
             * add errors to $rootScope, log errors to remote web server,
             * or log locally. Or throw hard. It is entirely up to us.
             * throw exception;
             */
        };
    }
})(angular);