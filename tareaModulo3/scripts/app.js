(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',      
            scope: {
                found: '<',
                myTitle: '@title',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'list',
            bindToController: true
        };
        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var list = this;
        list.searchTerm = "";
        list.found = [];
        var origTitle = "Found Items: ";

        list.name = "";
        list.description = "";

        list.removeItem = function (itemIndex) {
            MenuSearchService.removeItem(itemIndex);
        }

        list.getMatchedMenuItems = function () {
            MenuSearchService.getMatchedMenuItems(list.searchTerm)
                .then(function (foundItems) {
                    list.found = foundItems;
                    list.title = origTitle + list.found.length + " items ";
                    //console.log(list.found);
                })
                .catch(function (error) {
                    console.log("Something went wrong.", error);
                });
        }

    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        var foundItems = [];

        service.getItems = function () {
            return foundItems;
        }

        service.removeItem = function (itemIndex) {
            foundItems.splice(itemIndex, 1);
        }

        service.addItem = function (item) {
            foundItems.push(item);
        }

        service.getMatchedMenuItems = function(searchTerm){
            return $http({
                method: "GET",
                url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
            }).then(function (response) {
                var menu = [response.data.A.menu_items
                    , response.data.B.menu_items
                    , response.data.C.menu_items
                    , response.data.CM.menu_items    
                    , response.data.CU.menu_items    
                    , response.data.D.menu_items
                    , response.data.DK.menu_items
                    , response.data.DS.menu_items
                    , response.data.F.menu_items
                    , response.data.FR.menu_items
                    , response.data.FY.menu_items
                    , response.data.L.menu_items
                    , response.data.NF.menu_items
                    , response.data.NL.menu_items
                    , response.data.PF.menu_items
                    , response.data.SO.menu_items
                    , response.data.SP.menu_items
                    , response.data.SR.menu_items
                    , response.data.V.menu_items
                    , response.data.VG.menu_items].flat();              
                for (var i = 0; i < menu.length; i++) {
                    var foundItem = {
                        name: menu[i].name,
                        description: menu[i].description
                    };
                    if (foundItem.description.indexOf(searchTerm.toLowerCase()) !== -1) {
                        service.addItem(foundItem);
                    }
                }
                return service.getItems();
            });
        }
    }
    
    
}) ();