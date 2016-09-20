/*
 *Firebase&angularFire
 *
 */
(function() {
	debugger;
     var config = {
		apiKey: "AIzaSyDvw5j9rwUjPMI2hnm2HtrzV2fs5wkMqEM",
		authDomain: "bsu-posts.firebaseapp.com",
		databaseURL: "https://bsu-posts.firebaseio.com",
		storageBucket: "",
	  };
	firebase.initializeApp(config);
 })();

var app = angular.module("angularFire", ["firebase"]);
var login = function(){
	firebase.auth().signInAnonymously().catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	});
}

app.controller("binderInit", function($scope, $firebaseObject) {
	
  var ref = firebase.database().ref();
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
});


app.controller("postsCtrl", function ($scope, $firebaseObject) {
	login();
	var ref = firebase.database().ref().child("data");
	// create a synchronized array
	// click on `index.html` above to see it used in the DOM!
	var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  	syncObject.$bindTo($scope, "data");
	$scope.testFuction = function () {
		alert(111);
	}
});

app.controller("postLists", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("posts");
  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  $scope.posts = $firebaseArray(ref);
});

app.controller("logIn", function ($scope, $firebaseAuth) {
	var auth = $firebaseAuth();
	// login with Facebook
	auth.$signInWithPopup("facebook").then(function (firebaseUser) {
		console.log("Signed in as:", firebaseUser.uid);
	}).catch(function (error) {
		console.log("Authentication failed:", error);
	});
});