(function () {
    'use strict';

    angular.module('Data')
        .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com")
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getAllCategories = function () {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            });
            return response;
        };

        service.getItemsForCategory = function (categoryShortName) {
            var response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items/"+ categoryShortName +".json")
            });
            return response;
        }

    }
})();