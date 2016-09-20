(function (ng) {
	'use strict';
/*	debugger;
	var app = ng.module('ngLoadScript', []);
	app.directive('script', function () {
		return {
			restrict: 'E'
			, scope: false
			, link: function (scope, elem, attr) {
				if (attr.type === 'text/javascript-lazy') {
					var code = elem.text();
					var f = new Function(code);
					f();
				}
			}
		};
	});*/
	var config = {
		apiKey: "AIzaSyDvw5j9rwUjPMI2hnm2HtrzV2fs5wkMqEM"
		, authDomain: "bsu-posts.firebaseapp.com"
		, databaseURL: "https://bsu-posts.firebaseio.com"
		, storageBucket: ""
	};
	firebase.initializeApp(config);
}(angular));
var app = angular.module("angularFire", ["firebase"]);
var login = function () {
	firebase.auth().signInAnonymously().catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
	});
}
app.directive('script', function () {
	return {
		restrict: 'E'
		, scope: false
		, link: function (scope, elem, attr) {
			if (attr.type === 'text/javascript-lazy') {
				var s = document.createElement("script");
				s.type = "text/javascript";
				var src = elem.attr('src');
				if (src !== undefined) {
					s.src = src;
				}
				else {
					var code = elem.text();
					s.text = code;
				}
				document.head.appendChild(s);
				elem.remove();
			}
		}
	};
});

app.controller("navBarController", function ($scope) {
	debugger;
	$scope.testFuction = function () {
		alert(111);
	};
});