/**
 *JS加载控制
 *yliu12liuying18@gmail.com
 */
/**
 *异步加载
 */
var bpImportJsAsync = function (file) {
	"use strict";
	document.write('<script type="text/javascript" async src="' + file + '"></script>');
	/*var new_element = document.createElement("script");
	new_element.setAttribute("type", "text/javascript");
	new_element.setAttribute("src", file);
	new_element.setAttribute("async", true);
	document.body.appendChild(new_element);*/
};
/**
 *非异步加载
 */
var bpImportJs = function (file) {
	"use strict";
	document.write('<script type="text/javascript" src="' + file + '"></script>');
	/*var new_element = document.createElement("script");
	new_element.setAttribute("type", "text/javascript");
	new_element.setAttribute("src", file);
	document.body.appendChild(new_element);*/
};
//firebase
bpImportJs('https://www.gstatic.com/firebasejs/3.3.0/firebase.js');
//jQuery
bpImportJs('http://code.jquery.com/jquery-1.12.4.min.js');
//angularJs--本地太慢先用google
//bpImportJsAsync('/library/Angular1/angular.min.js');
bpImportJs('https://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js');
//angularFire
bpImportJs('https://cdn.firebase.com/libs/angularfire/2.0.1/angularfire.min.js');

bpImportJs('/index/app.js');
//bpImportJs('/index/angularfire.js');

//bootstrap
bpImportJsAsync('/library/bootstrap-3.3.7-dist/js/bootstrap.min.js');
