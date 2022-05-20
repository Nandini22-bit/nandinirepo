var App = angular.module('myApp', []);

App.controller('myController', ['$scope', '$filter', function ($scope, $filter) {
    $scope.convertmask = function (searchText) {
        console.log('$filter',$filter);
        $scope.searchText = $filter('mask')(searchText);
    };
   
$scope.restrictedWords = ["kill", "fight", "slap"];  
    console.log("array",$scope.restrictedWords);

  
            $scope.click = function (arrInput) {
               
                var arrInput = $scope.restrictedWords;
               var a= $scope.restrictedWords.push(arrInput);
   
            };
            
    // $scope.wordcheck=function(txtInput){
    //     $scope.restrictedWords = ["kill", "fight", "slap"];  
    //      var reg= /^[^`~!@#$%\^&*()_+={}|[\]\\:';"<>?,./1-9]*$/;
    //             for (var i = 0; i < $scope.restrictedWords.length; i++) {
    //                  txtInput =$scope.restrictedWords[i];  
    //                 if (txtInput.match(reg)){
    //                     return "Please enter value";
                  
    //                }else if (!txtInput.match(reg)){
    //                     return "Don't enter only special characters";
    //                }
    //             }  
    // }

}]);

App.filter("mask", function () {
    return function(searchText) {
            if (searchText) {
                var record = []
                var resp = searchText.split('');
                for (var i = 0; i < resp.length; i++) {
                    record.push(resp[i].replace(resp[i], '*'));
                }
                return record.join('');

            }
        }
})


