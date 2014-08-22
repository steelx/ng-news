/**
* Controller
* auth.js ## AuthCtrl
* To check if user already signedIn ! with Auth Service
*/
'use strict';

app.controller('AuthCtrl', ['$scope', '$location', 'Auth', 'User',
    function($scope, $location, Auth, User){
        if(Auth.signedIn()){
            $location.path('/');//redirect to homepage if user already logged in.
        }

        //Login check for hard page reload
        $scope.$on('$firebaseSimpleLogin:login', function(){
            $location.path('/');//redirect to homepage if user already logged in.
        });

        $scope.login = function(){
            $scope.progress = true;
            Auth.login($scope.user).then(function(loggedinUser){
                //After user successful Login
                console.log(loggedinUser);
                $location.path('/');
            }, function(error){
                $scope.progress = false;
                $scope.error = error.toString();
            });

        };

        $scope.register = function(){
            $scope.progress = true;
            Auth.register($scope.user).then(function(authUser){
                //After user successfuly registered
                User.create(authUser, $scope.user.username);
                console.log(authUser);
                $location.path('/');
            }, function(error){
                $scope.progress = false;
                $scope.error = error.toString();
            });
        };
    }
]);
