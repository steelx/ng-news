'use strict';
/*
  Controller
  profile.js
*/
app.controller('ProfileCtrl', ['$scope','$routeParams','Post','User',
  function($scope, $routeParams, Post, User){
    $scope.user = User.findByUsername($routeParams.username);

    
  }
]);
