'use strict';

app.controller('PostsCtrl', ['$scope',
	function($scope){
        $scope.post = {url: 'http://', title: ''};
    }
]);