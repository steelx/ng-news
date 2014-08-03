/**
* Controller
* postview.js
*/
app.controller('PostViewCtrl',['$scope', '$routeParams', 'Post',
    function($scope, $routeParams, Post){
    	//Creating Single post view page
    	//we get postId from URL and find the child
    	$scope.post = Post.find($routeParams.postId);
    }
]);