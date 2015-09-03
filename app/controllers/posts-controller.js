(function(){
  'use strict';
  
  angular.module('plunker')
  .controller('PostsController', PostsControllerFn);
  
  PostsControllerFn.$inject=['dataService'];
  function PostsControllerFn(dataService) {
      var postsVm = this;

      dataService.getPosts()
          .then(function (posts) {
              postsVm.entries = posts;
          },
          function (err) {
              console.log(err);
          });
  }
})();