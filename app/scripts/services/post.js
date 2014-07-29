/**
* Service
* post.js
*/
app.factory('Post', ['$resource', function($resource){
    return $resource('https://ngnews-fire.firebaseio.com/posts/:id.json');
}]);