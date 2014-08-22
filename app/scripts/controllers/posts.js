'use strict';
/**
* Controller
* posts.js
*/
app.controller('PostsCtrl', ['$scope','Post', '$location', 'Auth',
	function($scope, Post, $location, Auth){
				//load all posts
        if($location.path('/')){
					$scope.posts = Post.all;
					//added location condition else otherwise it will load all posts on user profile
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

				$scope.postCommentsLength = function(post){
					
						if(post.hasOwnProperty('comments')){
							return Object.keys(post.comments).length;
						} else {
							return 0;
						}

				};
    }
]);
