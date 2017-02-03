var app = angular.module("buckApp", ["ngRoute"]);
			app.config(function($routeProvider) {
				$routeProvider
				.when("/", {
					templateUrl : "views/home.html"
				})
				.when("/blog", {
					templateUrl : "views/blog.html"
				})
				.when("/about", {
					templateUrl : "views/about.html"
				})
				.when("/donate", {
					templateUrl : "views/donate.html"
				});
			});
			
			app.controller('navController', function($scope, $location) {
				$scope.isActive = function(currentView) {
					console.log("current" + currentView);
					console.log("path:" + $location.path());
					return currentView === $location.path();
				};
				console.log($scope.isActive);
			});