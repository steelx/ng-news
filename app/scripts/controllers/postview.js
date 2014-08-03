/**
* Controller
* postview.js
*/
app.controller('PostViewCtrl',['$scope', '$routeparams', 'Post',
    function($scope, $routeparams, Post){
    	//Creating Single post view page
    	//we get postId from URL and find the child
    	$scope.post = Post.find($routeparams.postId);
    }
]);