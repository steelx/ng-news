/**
* Controller
* auth.js ## AuthCtrl
* To check if user already signedIn ! with Auth Service
*/
'use strict';

app.controller('AuthCtrl', ['$scope', '$location', 'Auth',
    function($scope, $location, Auth){
        if(Auth.signedIn()){
            $location.path('/');//redirect to homepage if user already logged in.
        }
        
        //Login check for hard page reload
        $scope.$on('$firebaseSimpleLogin:login', function(){
            $location.path('/');//redirect to homepage if user already logged in.
        });
        
        $scope.login = function(){
            Auth.login($scope.user).then(function(loggedinUser){
                //After user successful Login
                console.log(loggedinUser);
                $location.path('/');
            });
            
        };
        
        $scope.register = function(){
            Auth.register($scope.user).then(function(authUser){
                //After user successfuly registered
                console.log(authUser);
                $location.path('/');
            });
        };
    }
]);