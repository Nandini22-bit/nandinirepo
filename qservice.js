angular.module("myApp",[])

.controller("user",['$scope','$q','dataFactory',function($scope,$q,dataFactory){
    // $scope.myService=myService;
    //factory
    dataFactory.defer1=$q.defer();
    dataFactory.defer2=$q.defer();
    dataFactory.GetRecords();
    dataFactory.GetRecordsec();

    //service
//      myService.defer1=$q.defer();
//       myService.defer2=$q.defer();
//       myService.GetRecords();
//       myService.GetRecordsec();
//    console.log("myservice",myService.GetRecords())

  
   $q.all([dataFactory.finallData().defer1.promise,dataFactory.finallData().defer2.promise]).then(function(response){
      
    $scope.finallData = response[0].concat(response[1]);
         console.log('finalrecord', $scope.finallData);
 
     });
 
//     $q.all([myService.finallData().defer1.promise,myService.finallData().defer2.promise]).then(function(response){
      
//    $scope.finallData = response[0].concat(response[1]);
//         console.log('finalrecord', $scope.finallData);

//     });

    
}]).factory("dataFactory",function($http,$q){
    var defer1 = $q.defer();
       var defer2 = $q.defer();
   
       var dataFactory = {};
   
   
       dataFactory.GetRecords = function(){
        
          
           $http.get("https://jsonplaceholder.typicode.com/posts").then(function(response){
           
         var result = response.data;
        console.log("record first",result)
             defer1.resolve(result);
           }
           
           )
          
       }
   
       dataFactory.GetRecordsec = function(){
           
       $http.get("https://jsonplaceholder.typicode.com/posts").then(function(response){
       
        var resultsec = response.data;
          console.log("record first",resultsec)
          defer2.resolve(resultsec);
   
            }
           )
        
         }
         dataFactory.finallData=function(){
             return {
                 defer1,defer2
             }
         }
         return dataFactory;
   
   
   
   });

//service 

// .service("myService",function($http,$q){
//  var defer1 = $q.defer();
//     var defer2 = $q.defer();

 


//     this.GetRecords = function(){
     
       
//         $http.get("https://jsonplaceholder.typicode.com/posts").then(function(response){
        
//      this.result = response.data;
//      console.log("record first",this.result)
//           defer1.resolve(this.result);
//         }
        
//         )
       
//     }

//    this.GetRecordsec = function(){
        
//     $http.get("https://jsonplaceholder.typicode.com/posts").then(function(response){
    
//        this.resultsec = response.data;
//        console.log("record first",this.resultsec)
//        defer2.resolve(this.resultsec);

//          }
//         )
     
//       }
//       this.finallData=function(){
//           return {
//               defer1,defer2
//           }
//       }
//       return this;



// })
