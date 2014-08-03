'use strict';
/**
* Service
* post.js
*/
app.factory('Post', ['$firebase', 'FIREBASE_URL', function($firebase, FIREBASE_URL){
    var ref = new Firebase(FIREBASE_URL + 'posts');//creates posts object on root of url
    
    var posts = $firebase(ref);//we get posts Object from firebase
    
    var Post = {
        
        all: posts,
        create: function(post){
            return posts.$add(post);
        },
        find: function(postId){
            return posts.$child(postId);
        },
        delete: function(postId){
        	return posts.$remove(postId);
    	}
        
    };
    
    return Post;
}]);