'use strict';
/**
* Controller
* posts.js
*/
app.controller('PostsCtrl', ['$scope','Post', '$location', 'Auth',
	function($scope, Post, $location, Auth){
        $scope.posts = Post.all;
        $scope.post = {url: 'http://', title: ''};
        
        $scope.submitPost = function(){
            Post.create($scope.post).then(function(ref){
           		$location.path('/posts/' + ref.name());
                console.log(ref);
            });
                     
        };
        
        $scope.deletePost = function(postId){
            Post.delete(postId);
        };
    }
]);