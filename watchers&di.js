var myApp=angular.module('myApp',[]);
myApp.controller("watchercon",function($scope){
    $scope.init=function(){
        $scope.name=''
    }
    $scope.$watch('name', function(newvalue, oldvalue)  {
        console.log('oldvalue' + oldvalue, 'newvalue' +'' + newvalue);


    //     $scope.name="name for apply angular";
    //    if (newvalue!=oldvalue){
    //        $scope.name=newvalue;
    //    }   
     });

        $scope.callApply=function(){
            $scope.name="name for apply angular";
            if(newvalue !=oldvalue){
                $scope.$apply();
            }
      
        }
        $scope.addEventListener=function(){

             $scope.name="angularjs";
             $scope.$digest();
        }
      
});