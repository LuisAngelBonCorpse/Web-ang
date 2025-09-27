(function () {
    'use strict';

    //define el módulo AngularJS llamado 'ShoppingListCheckOff'
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    //Controlador para la lista de artículos por comprar
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var ToBuy = this;
        ToBuy.items = ShoppingListCheckOffService.getItemsToBuy();
        ToBuy.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }
        ToBuy.isEmpty = function () {
            return ShoppingListCheckOffService.isEmpty(ToBuy.items);
        }
    }

    //Controlador para la lista de artículos ya comprados
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.items = ShoppingListCheckOffService.getItemsBought();
        alreadyBought.isEmpty = function () {
            return ShoppingListCheckOffService.isEmpty(alreadyBought.items);
        }
    }

    //Servicio para gestionar las listas de compra
    function ShoppingListCheckOffService() {
        var service = this;
        
        var itemsToBuy = [
            { name: "Galletas", quantity: 4 },
            { name: "Huevos", quantity: 14 },
            { name: "Refrescos", quantity: 3 },
            { name: "Leches", quantity: 3 },
            { name: "Fresas", quantity: 20 }
        ];

        var itemsBought = [];

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsBought = function () {
            return itemsBought;
        };

        // Mueve un artículo de la lista de "por comprar" a la lista de "ya comprado"
        service.buyItem = function (itemIndex) {
            var item = itemsToBuy[itemIndex];
            itemsBought.push(item);
            itemsToBuy.splice(itemIndex, 1);
        }

        // Verifica si una lista está vacía
        service.isEmpty = function (items){
            console.log(items.length === 0);
            return items.length === 0;
        }
    }
})();