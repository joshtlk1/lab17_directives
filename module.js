var app = angular.module("myProject", []);

app.directive("customPost", function(){
	return {
		restrict: "EA",
		templateUrl: "templates/projects.html"
	};
});

