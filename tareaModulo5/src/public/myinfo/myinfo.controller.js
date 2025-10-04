(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['UserService', 'MenuService'];
    function MyInfoController(UserService, MenuService) {
        var myInfoCtrl = this;

        myInfoCtrl.userInfo = UserService.getUserInfo();
        myInfoCtrl.favoriteItem = null;

        if (myInfoCtrl.userInfo && myInfoCtrl.userInfo.favoriteMenuItem) {
            var shortName = myInfoCtrl.userInfo.favoriteMenuItem;
            var category = shortName.charAt(0);
            var index = parseInt(shortName.substring(1)) - 1;

            MenuService.getMenuItems(category).then(function (response) {
                if (response.menu_items && response.menu_items[index]) {
                    myInfoCtrl.favoriteItem = response.menu_items[index];
                }
            });
        }
    }

})();