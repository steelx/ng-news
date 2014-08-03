/**
* Controller
* nav.js ## NavCtrl
* include for header.html
*/
'use strict';

app.controller('NavCtrl', ['$scope', '$location', 'Auth',
	function($scope, $location, Auth){
                             
        $scope.logout = function(){
        	Auth.logout();          
        };
    }
]);