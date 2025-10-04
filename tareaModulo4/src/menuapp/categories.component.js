(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/menuapp/plantillas/categories.template.html',
            bindings: {
                items: '<'
            }
        });

})();