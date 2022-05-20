angular.module("myApp",[]).
config(function($provide) {

    $provide.decorator('myService', function($delegate) {
      $delegate.getDate = function() { // override with actual date object
        return new Date();
      };
      return $delegate;
    });
  })
.service("myService",function(){
    this.getData=function(){
        return;
    }

}).controller("myctrl",['myService',function(myService)
{
    var con =this;
    con.date = myService.getDate();


}
])