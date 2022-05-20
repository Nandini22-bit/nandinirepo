angular.module('myApp',[]).controller('constroller',['$scope',function($scope){
    $scope.customer={
        name:"nn",
        age:21,
        mobile:783243892
    };
}])


  .directive('myCustomer', function() {
    return {
      template: 'Name: {{customer.name}} Address: {{customer.address}} age:{{customer.age}}' 
    };
  });

