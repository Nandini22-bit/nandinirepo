var myApp=angular.module('myApp',[]);

myApp.controller('interploatecontroller',['$scope','$timeout',function($scope,$timeout)
    {
        $scope.name='AngularJs';
        $timeout(function()  {
            $scope.name='everynody';
        },
  3000);
}]);