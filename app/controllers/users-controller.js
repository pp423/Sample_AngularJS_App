(function () {
    'use strict';

    angular.module('plunker')
        .controller('UsersController', UsersControllerFn);

    UsersControllerFn.$inject = ['dataService'];
    function UsersControllerFn(dataService) {
        var usersVm = this;

        init();

        function init() {
            dataService.getUsers().then(function (data) {
                usersVm.people = data;
            }, function (err) {
                console.log(err);
            });
        }
    }

})();