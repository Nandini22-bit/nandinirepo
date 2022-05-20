angular.module("Demo", ["ui.router"])

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "home.html",
        controller: 'MyController1'

      })


      .state("students", {
        url: "/students",
        templateUrl: "students.html",
        controller: 'students'

      })
      .state("sorting", {
        url: "/sorting",
        templateUrl: "sorting.html",
        controller: 'sorting'

      })
      .state("form", {
        url: "/form",
        templateUrl: "form.html",
        controller: 'formvalidation'

      })


  }).controller('students', ['$scope', '$stateParams', '$state', function ($scope, $stateParams, $state) {
    $scope.names = [
      {
        id: 1,
        name:
          'aa',
        age: 21,
        email: "nn@gmail.com",
        phone: 9923232323
      },
      {
        id: 2,
        name: 'tt',
        age: 11,
        email: "khu@example.com",
        phone: '87375758845'
      },
      {
        id: 3,
        name: 'rr',

        age: 25,
        email: "rr@yahoo.com",
        phone: 7888432223
      },
      {
        id: 4,
        name: 'yyuyr',

        age: 05,
        email: "rr@yahoo.com",
        phone: 7888432223
      }, {
        id: 5,
        name: 'rr',

        age: 25,
        email: "rr@yahoo.com",
        phone: 7888432223
      }
    ];
    $scope.column = 'id';


    $scope.reverse = false;

    $scope.sortColumn = function (col) {
      $scope.column = col;
      if ($scope.reverse) {
        $scope.reverse = false;

      } else {
        $scope.reverse = true;

      }
    };


    $scope.sortClass = function (col) {
      if ($scope.column == col) {
        if ($scope.reverse) {
          return 'arrow-down';
        } else {
          return 'arrow-up';
        }
      } else {
        return '';
      }
    }

    //  $scope.id=$stateParams.id;
    //  $scope.names=$scope.names.filter(function(value){ return value.id==$scope.id})
    console.log($scope.names);


  }]).controller('sorting', function ($scope) {


    $scope.friends = [
      {
        sno: 1,
        name: 'ao',
        age: 23,
        gender: 'Male'
      },
      {
        sno: 2,
        name: 'rani',
        age: 23,
        gender: 'Female'
      },
      {
        sno: 3,
        name: 'Vishal Sahu',
        age: 24,
        gender: 'Male'
      },
      {
        sno: 4,
        name: 'Sanjay Singh',
        age: 22,
        gender: 'Male'
      }
    ];


    $scope.column = 'sno';


    $scope.reverse = false;

    $scope.sortColumn = function (col) {
      $scope.column = col;
      if ($scope.reverse) {
        $scope.reverse = false;

      } else {
        $scope.reverse = true;

      }
    };


    $scope.sortClass = function (col) {
      if ($scope.column == col) {
        if ($scope.reverse) {
          return 'arrow-down';
        } else {
          return 'arrow-up';
        }
      } else {
        return '';
      }
    }
  }).controller("MyController1", function ($scope, $rootScope) {


    $scope.OnClick = function (evt, data) {
      $scope.$broadcast("SendDown", "some data");
    }

    $scope.OnClickemit = function (evt, data) {
      $scope.$emit("SendUp", "some emit  data ");
    }
    $scope.$on("SendDown", function (evt, data) {
      $scope.Message1 = "Inside SendDown handler of broadcastdata : " + data;
    });
    $rootScope.$on("SendUp", function (evt, data) {
      $scope.Message = "Inside SendUp handler of Emit : " + data;
    });


  }).controller("formvalidation", function ($scope) {

    $scope.compare = function (repass) {
      $scope.isconfirm = $scope.password == repass ? true : false;
    }

    $('#name').ready(function () {
      console.log('$(document)', $('body'));
      {
        console.log('asd');
        var elm = $('#name');
        elm.keypress('keypress', function (e) {
          if (e.which == 32) {
            return false;
          }
        })

      }
    });



  }).directive('validation', function () {
    return {
      restrict: 'A',
      link: function (scope, elm, attrs) {

        //elm.keypress('keypress', function (e) {


        elm.keyup('keypress', function (e) {
          if (elm.attr('inputonlystring')) {
            var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
            var value = elm.val();

            var newv = value.match(regex)
            if (!newv) {


              const spanElem = document.createElement("span");
              spanElem.textContent = "Hint:only string Aa";
              spanElem.setAttribute("id", 'spanmsg')
              if (document.getElementById("spanmsg"))
                document.getElementById("spanmsg").remove()
                if (document.getElementById("spanmsg1"))
                document.getElementById("spanmsg1").remove()


              document.getElementById("span2").appendChild(spanElem);




              return false;
            }
            else{
              const spanElem = document.createElement("span");
              spanElem.textContent = "input is correct";
              spanElem.setAttribute("id", 'spanmsg1')
              if (document.getElementById("spanmsg1"))
                document.getElementById("spanmsg1").remove()

                if (document.getElementById("spanmsg"))
                document.getElementById("spanmsg").remove()

              document.getElementById("span2").appendChild(spanElem);
            }
          }
        })
        //  if (elm.attr('inputonlyname'),function(e){
        //   if(e.which > 48 || e.which < 57){
        //     console.log("test")
        //     return false;
        //   }
        //   else{
        //     return true;
        //   }

        //  }) 

        //  elm.keyup("keypress",function(e){
        //   if(elm.attr('inputstrnum')){

        //     if(e.which > 48 && e.which < 57){
        //          console.log("test")
        //           return false;
        //         }
        //         else{
        //         return true;
        //         }
        //   }
        //  })

        //   // var key = [46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
        //   // if (!key.includes(e.which)) {
        //   //   return false
        //   // }
        //   // else{
        //   //   return true;
        //   // }



        //   if (elm.attr('inputonlynumber')) {
        //     var key = [43, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
        //     if (!key.includes(e.which)) {
        //       return false
        //     }
        //   }
        //   elm.keyup('keyup', function (e) {
        //     if (elm.attr('inputonlynumberandstring')) {
        //       var regex = /^[-. ]?\+([0-9]{2})([0-9]{10})$/;
        //       var value = elm.val();
        //       var newv = value.match(regex)
        //       console.log("newinput matched", newv);
        //       if (!newv) { 
        //         function phoneElement() {
        //           const spanElem = document.createElement("span1");
        //           spanElem.textContent = "Hint:+919867584650";
        //           spanElem.setAttribute("id", 'spanmsg')
        //           if (document.getElementById('span1').childNodes.length > 0) {
        //             return;
        //           }
        //           else {
        //             document.getElementById("span1").appendChild(spanElem);

        //           }


        //           return false;
        //         }
        //        }
        //        else {

        //         if (document.getElementById("spanmsg") !== null)
        //           document.getElementById("spanmsg").remove()


        //         const spanElem1 = document.createElement("span1");
        //         spanElem1.textContent = "phone is correct ";

        //         if (document.getElementById('span1').childNodes.length > 0) {
        //           return;
        //         }
        //         else {
        //           document.getElementById("span1").appendChild(spanElem1);

        //         }



        //         return true;
        //       }
        //       phoneElement();
        //     }

        //   })





        //   elm.keyup('keyup', function (e) {
        //     if (elm.attr('inputonlyemail')) {
        //       var regex = /^[A-Za-z]?[a-zA-Z0-9]+@[a-zA-Z0-9.-]+$/;
        //       var value = elm.val();
        //       var newv = value.match(regex)
        //       console.log("newinput matched", newv);
        //       if (!newv) {
        //         function domElement() {
        //           const spanElem = document.createElement("span");
        //           spanElem.textContent = "Email:aa12@gmail.com";
        //           spanElem.setAttribute("id", 'spanmsg')
        //           if (document.getElementById('span').childNodes.length > 0) {
        //             return;
        //           }
        //           else {
        //             document.getElementById("span").appendChild(spanElem);

        //           }


        //           return false;
        //         }


        //       }
        //       else {

        //         if (document.getElementById("spanmsg") !== null)
        //           document.getElementById("spanmsg").remove()


        //         const spanElem1 = document.createElement("span");
        //         spanElem1.textContent = "email is correct ";

        //         if (document.getElementById('span').childNodes.length > 0) {
        //           return;
        //         }
        //         else {
        //           document.getElementById("span").appendChild(spanElem1);

        //         }



        //         return true;
        //       }
        //       domElement();

        //     }
        //   })
        //})
      }
    }
  })
