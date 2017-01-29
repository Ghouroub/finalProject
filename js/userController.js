angular.module('UserApp', []).controller('UserController', function($scope) {
	$scope.NameChange = function() {
		$scope.greeting = "Hello " + $scope.name;
	};
}); 