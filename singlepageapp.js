  var app=angular.module("myApp",['ngRoute']).
  config(function($routeProvider){
      $routeProvider.when('/home',{
          templateUrl:'home.html',
          controller:'HomeController'
      }).when('/second/:num',{
          templateUrl:'second.html',
          controller:'SecondController'
      }).otherwise({redirectTo:'/'});
  });
  app.controller("HomeController",function($scope){
      $scope.message="hello home component.";
  });
  app.controller("SecondController",function($scope,$routeParams){
      $scope.num=$routeParams.num;
      $scope.num1=$routeParams.num1;
      $scope.message="hello second component.";
  });