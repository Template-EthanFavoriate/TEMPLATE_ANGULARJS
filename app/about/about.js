/* Controllers */
var module_about = angular.module('module_about',[]);


module_about.controller('aboutCrtl',aboutCrtl);
function aboutCrtl($scope,aboutFac){
	$scope.about_author='ethan wang';
	//Now I'm going to use this factory
	aboutFac.doGreet();
}


module_about.factory('aboutFac',aboutFac);
function aboutFac(){
	var factory={};	
	factory.doGreet = function(){
		alert('doGreet method called!');
	}
	return factory;
}


