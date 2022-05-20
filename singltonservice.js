
var app = angular.module('myApp', []);

// Singleton service create a single instance in whole application we access in every controller with the same function(instance).
app.service('ChoirBoyService', function () {
  this.number = Math.random(10);
  this.sing = function () {
    return this.number;
  };
});

app.controller('HelloCtrl',function($scope, ChoirBoyService) {
    choirBoy = ChoirBoyService;
    $scope.song = ChoirBoyService.sing();
});

app.controller('GoodbyeCtrl',function($scope, ChoirBoyService) {
    choirBoy = ChoirBoyService;
    $scope.song = ChoirBoyService.sing();
});
