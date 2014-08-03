/**
* Service
* auth.js
* Service for authentication by injecting $firebaseSimpleLogin which will enable use of '$firebaseSimpleLogin' methods.
* Also injecting '$rootScope' to make a GLOABL check if the user is signed in.
* 'FIREBASE_URL' constant from app.js
*/
'use strict';

app.factory('Auth',['$firebaseSimpleLogin', 'FIREBASE_URL', '$rootScope',
	function($firebaseSimpleLogin, FIREBASE_URL, $rootScope){
    	var ref = new Firebase(FIREBASE_URL);
        var auth = $firebaseSimpleLogin(ref);
        
        var Auth = {
            
        };
        
        return Auth;
    }
]);
