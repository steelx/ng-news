/* global app:true */
'use strict';
/**
 * @Ajinkya Borade
 * www.ajinkyaxjs.com
 */
var app = angular.module('ngnews', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}
]);