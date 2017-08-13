(function () {
    'use strict';

    angular
        .module('logpoc')
        .config(hljs);

    hljs.$inject = ["hljsServiceProvider"];

    function hljs(hljsServiceProvider) {
        hljsServiceProvider.setOptions({
            // replace tab with 4 spaces
            tabReplace: '    '
        });
    }
})();