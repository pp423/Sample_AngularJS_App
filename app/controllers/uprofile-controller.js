(function() {
  'use strict';

  angular.module('plunker')
    .controller('UserProfileController', UserProfileControllerFn);
      //service is injected & used depending on the function name
  UserProfileControllerFn.$inject = ['dataService', '$routeParams'];

  function UserProfileControllerFn(dataService, $routeParams) { 
    var uprofileVm = this;
    console.log($routeParams); //$routeParam is a service used to access the dynamic input & attach it to the url to route it to specific page.

    dataService.getUserDetails($routeParams.userid).then(function(data) {
      uprofileVm.person = data;
    }, function(err) {
      console.log(err);
    });
  }

})();