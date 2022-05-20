var app=angular.module("myapp",[]);
app.controller("ngclickandngdblcon",function($scope){
   $scope.buttonclick=function(){
       window.alert("welcome you performed click event.");
   }
});