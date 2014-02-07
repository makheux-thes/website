// controllers.js
angular.module('makheuxThesControllers', []);

angular.module('makheuxThesControllers').controller('PomodoroListCtrl', ['$scope', 'Pomodoro', function($scope, Pomodoro) {
  $scope.pomodoros = Pomodoro.query();
  $scope.orderProp = 'priority';
}]);
 
angular.module('makheuxThesControllers').controller('PomodoroDetailCtrl', ['$scope', '$routeParams', 'Pomodoro', function($scope, $routeParams, Pomodoro) {
  $scope.pomodoro = Pomodoro.get({pomodoroId: $routeParams.pomodoroId}, function(pomodoro) {
    //$scope.mainImageUrl = pomodoro.images[0];
  });
 
  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}]);