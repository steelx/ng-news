'use strict';
/**
* Controller
* posts.js
*/
app.controller('PostsCtrl', ['$scope','Post', '$location', 'Auth',
	function($scope, Post, $location, Auth){
        if($location.path('/')){
					$scope.posts = Post.all;
				}
        $scope.post = {url: 'http://', title: ''};

        $scope.submitPost = function(){
            Post.create($scope.post).then(function(postId){
           		$location.path('/posts/' + postId);
            });

        };

        $scope.deletePost = function(postId){
            Post.delete(postId);
        };
    }
]);
