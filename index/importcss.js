/**
*CSS加载控制
*yliu12liuying18@gmail.com
*/

/**
*加载
*/
var bpImportCSS = function (file) {
	"use strict";
	//    document.write(' <link rel="stylesheet" type="text/css" href="' + file + '" />');
	var new_element = document.createElement("link");
	new_element.setAttribute("rel", "stylesheet");
	new_element.setAttribute("type", "text/css");
	new_element.setAttribute("href", file);
	document.head.appendChild(new_element);
};

//bootstrap
bpImportCSS('/library/bootstrap-3.3.7-dist/css/bootstrap.css');

//font
bpImportCSS('/library/mycss/font-awsome.css');

//bsu-bootstrap
bpImportCSS('/library/mycss/bsu-bootstrap.css');

//bsu
bpImportCSS('/library/mycss/bsu-bootstrap-templates.css');




