
var app=angular.module("myApp",[]);


// app.controller("myCont",function($scope){
//  $scope.name='amit',
//  $scope.age=21,
//  $scope.email='anasds@gmail.com'

 
// });

// app.directive("myForm",function(){
  
//     return {
//         restric:'E',
//         template:"Name:<input  type='text' ng-model='name' /> <br>Age:<input  type='text' ng-model='age' /> <br>Email:<input  type='text' ng-model='email' /><br> <button type='submit' >submit</button>",
//         scope: {
//            'name': ' = name', 
//             'age': ' = age', 
//             'email':'=email'
         
            
//           },
//           controller:'myCont',
//         }
//  });
app.controller("Controller", function($scope){
  $scope.label = "Hello!";
});

 app.directive("simple", function(){
  return {
    restrict: "EA",
    transclude:true,
    template:"<div>{{label}}<div ng-transclude></div></div>",

    compile: function(attributes){
      console.log("attsds",attributes)
        return {
            pre: function(scope,element, attributes, controller, transcludeFn){
             console.log("pre",element);
            },
            post: function(scope, element, attributes, controller, transcludeFn){

            }
        }
    },
    controller: function($scope){

    }
  };
});
        
  
