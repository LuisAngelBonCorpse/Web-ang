(function () {
    'use strict';

    angular.module('LunchCheck', [])//crea el módulo LunchCheck

        .controller('LunchCheckController', LunchCheckController);  //crea el controlador LunchCheckController

    LunchCheckController.$inject = ['$scope'];  //inyecta la dependencia $scope
    function LunchCheckController($scope) { //define la función del controlador
        $scope.lunchMenu = "";  //inicializa la variable lunchMenu en el scope
        var items = []; //inicializa el array items

        $scope.lunchCheck = function () { //define la función lunchCheck en el scope
            items = $scope.lunchMenu.split(',') //divide la cadena lunchMenu en un array usando la coma como separador
                .map(item => item.trim()) //elimina los espacios en blanco alrededor de cada elemento
                .filter(item => item !== ""); //filtra los elementos vacíos

            if (items[0] === "" ||items.length === 0) { //si el primer elemento del array es una cadena vacía o la longitud del array es 0
                $scope.message = "Ingresa almuerzo por favor";
            } else if (items.length <= 3) { //si la longitud del array es menor o igual a 3
                $scope.message = "¡Disfruta!";
                $scope.lunchCheck.messageColor = "green";       
            } else if (items.length > 3) {  //si la longitud del array es mayor a 3
                $scope.message = "¡Demasiado!";
                $scope.lunchCheck.messageColor = "red";
            } else {
                console.log("Error inesperado"); //mensaje de error inesperado
            }
        }
    }
})();