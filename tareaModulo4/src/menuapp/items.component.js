(function () {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/menuapp/plantillas/items.template.html',
            bindings: {
                items: '<'
            }
        });

})();