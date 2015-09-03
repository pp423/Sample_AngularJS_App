(function () {
    'use strict';
    //service can have sharable code.
    angular.module('plunker')
        .service('dataService', dataServiceFn);

    dataServiceFn.$inject = ['$q', '$http'];

    function dataServiceFn($q, $http) {
        var self = this;

        self.getUsers = function () {
            var defer = $q.defer(); //defer is a function of Promise pattern & so is $q service

            $http({
                method: 'GET',
                url: 'http://jsonplaceholder.typicode.com/users'
            }).success(function (data) {
                defer.resolve(data);
            })
                .error(function (err) {
                    defer.reject(err);
                });

            return defer.promise; // promise is sent immediately. However the result of the promise could be +ve or negative which is the passed to the controller
        };

        self.getUserDetails = function (userid) {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'http://jsonplaceholder.typicode.com/users/' + userid
            })
                .success(function (data) {
                    defer.resolve(data);
                })
                .error(function (err) {
                    defer.reject(err);
                });

            return defer.promise;
        };

        self.getPosts = function () {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'http://jsonplaceholder.typicode.com/posts'
            })
                .success(function (data) {
                    defer.resolve(data);
                })
                .error(function (err) {
                    defer.reject(err);
                });
            return defer.promise;

        }
    }

})();