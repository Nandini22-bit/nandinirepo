angular.module('myApp', []).controller('filtercon', function($scope) {
    $scope.names = [
      {name:'Jani',age:21,salary:20000},
      {name:'Hege',age:22,salary:30000},
      {name:'Kai',age:23,salary:40000}
    ];
 
    $scope.name=""

    console.log($scope.names);
   
  });
