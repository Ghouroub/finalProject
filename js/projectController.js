angular.module('ProjectApp', [])
   .controller('projectController', function($scope) {
       $scope.greeting = "Hello World";
});

var app = angular.module('navTest', [

]);

app.controller('NavTestCtrl', function ($scope, $location, $http) {

  $scope.click = function(position, $event) {

    elem = angular.element($event.target);

    if (elem.hasClass("clicked")) {
      elem.removeClass("clicked")
    }else {
      elem.addClass("clicked")
    }

    // if (position == 1) //do something etc...


  };


  $scope.hoverIn = function($event){
    angular.element($event.target).addClass('hover')
  };

  $scope.hoverOut = function($event){
    angular.element($event.target).removeClass('hover')
  };
});