
    var myApp = angular.module('myApp', []);
    myApp.controller('customfiltercon',function($scope){
        $scope.persons = [ {
            name: 'Andrew John', age:25
            } ,
            {
            name: 'Will Smith', age:60
            },
            {
            name: 'Mark Taylor', age:35
            } , {
            name: 'Alice teams', age:65
            } ,
            {
            name: 'Todd ran',
            age:75
            } ] ;
    }
    );
    myApp.filter('seniorCitizenFilter', function () { 
        return function (personsArray,persons) {
           
     let seniorCitizen = personsArray.filter((persons) => { 
        return persons.age<65;
    })
    return seniorCitizen;
    } ;
    } ) ;

    myApp.filter('seniorCitizenFiltername',function(){
        return function(personsArray,persons){
            let seniorCitizen=personsArray.filter((persons)=>{
                return persons.name=='Alice teams';
            })
            return seniorCitizen;
        };

    });