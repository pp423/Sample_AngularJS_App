(function() {
  angular.module('plunker', ['ngRoute']);

  angular
  .module('plunker')
  .config(moduleConfig);

  moduleConfig.$inject = ['$routeProvider']; //ngRoute is module for routing the whole app for single page application
  function moduleConfig($routeProvider){ //$routeProvider is an internal service ngRoute provides
    $routeProvider
      .when('/users',{
        templateUrl: 'app/views/users-tmpl.html',
        controller: 'UsersController',
        controllerAs: 'usersVm'
      })
      .when('/users/:userid',{ //userid is a parameter
        templateUrl: 'app/views/user-profile-tmpl.html',
        controller: 'UserProfileController',
        controllerAs: 'uprofileVm'
      })
      .when('/posts',{
        templateUrl: 'app/views/posts-tmpl.html',
        controller: 'PostsController',
        controllerAs: 'postsVm'
      })
      .otherwise({
        redirectTo: '/users'
      });
  }
  
})();