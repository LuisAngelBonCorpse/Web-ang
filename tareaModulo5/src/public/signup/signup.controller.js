(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'UserService'];
    function SignUpController(MenuService, UserService) {
        var signUpCtrl = this;

        signUpCtrl.user = {};
        signUpCtrl.invalidMenuItem = false;
        signUpCtrl.saved = false;

        signUpCtrl.submit = function () {
            signUpCtrl.invalidMenuItem = false;
            signUpCtrl.saved = false;

            if (signUpCtrl.user.favoriteMenuItem) {
                var shortName = signUpCtrl.user.favoriteMenuItem.toUpperCase();
                var category = shortName.charAt(0);
                var number = parseInt(shortName.substring(1));

                if (isNaN(number)) {
                    signUpCtrl.invalidMenuItem = true;
                    return;
                }

                MenuService.getMenuItems(category).then(function (response) {
                    if (response.menu_items && response.menu_items[number - 1]) {

                        signUpCtrl.user.favoriteMenuItem = shortName;
                        UserService.saveUserInfo(signUpCtrl.user);
                        signUpCtrl.saved = true;
                    } else {
                        signUpCtrl.invalidMenuItem = true;
                    }
                }).catch(function () {
                    signUpCtrl.invalidMenuItem = true;
                });
            }
        };
    }

})();