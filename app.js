angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
      {name:'Jani',age:21,salary:20000},
      {name:'Hege',age:22,salary:30000},
      {name:'Kai',age:23,salary:40000}
    ];
    $scope.customers=""
    $scope.imgagesrc=""
    $scope.name=""
    $scope.home=""
    console.log($scope.names);
   
  });
