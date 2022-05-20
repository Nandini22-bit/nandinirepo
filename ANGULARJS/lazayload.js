angular.module("myApp",['ngRoute'])
.config(function($routeProvider){
    $routeProvider.when('/dataload',{
        templateUrl:'dataload.html',
        controller:'user'
    
  
    }).otherwise({redirectTo:'/'});
})
.controller("user",function($scope,$http,$log){

    $scope.page_number = 0
    $scope.page_size = 10;
    $scope.user = [];

    $scope.GetRecords = function(){
        $scope.page_number += 1;
    
        $http.get("https://jsonplaceholder.typicode.com/posts").then(function(response){
            
        var result = getNRecords(response.data, $scope.page_size, $scope.page_number);
        generateReport(result);
        $log.info( "loginfo",result);
        },function(response){ //call anomusous function for erroe
            $scope.error=response;
        $log.info( "lerroroginfo",result);

        }
        )
    }

    $scope.GetRecords();


    function generateReport(resp){
        for(var i =0 ; i < resp.length; i++){
            $scope.user.push(resp[i]);            
        }
    }
    
  
    function getNRecords(user, page_size, page_number) {
    return user.slice((page_number - 1) * page_size, page_number * page_size);
    }

    $scope.loadMore = function(){
        $scope.GetRecords();
    }
    
}).directive('toggleScroll', [
    function() {
    return function (scope, element, attr) {
            var raw = element[0];
            element.bind("scroll", function() {
                if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                    scope.$apply(attr.toggleScroll);
                    
                }
                
            });
        
    }
}]);
