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
    'ngSanitize',
    'firebase'
  ]);

app.constant('FIREBASE_URL', 'https://ngnews-fire.firebaseio.com/');

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
    })
    .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}
]);