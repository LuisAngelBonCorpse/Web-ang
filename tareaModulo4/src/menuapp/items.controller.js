(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['$stateParams','MenuDataService', 'items'];
    function ItemsController($stateParams,MenuDataService, items) {
        var catItems = this;
        var categoryId = $stateParams.categoryId;
        var categories = items.data;
        catItems.categoryShort = "";
        catItems.categoryName = "";
        catItems.items = [];
        //console.log(categories);
        for (var i = 0; i < categories.length; i++) {
            if (i == categoryId) {
                catItems.categoryShort = categories[i].short_name;
                catItems.categoryName = categories[i].name;
                break
            }
        }
        //console.log(catItems.categoryShort);
        MenuDataService.getItemsForCategory(catItems.categoryShort)
            .then(function (response) {
                catItems.items = response.data.menu_items;
                //console.log(catItems.items);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
)();