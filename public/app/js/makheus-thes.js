angular.module('makheux-thes', [
  'ngRoute', 
//  'ngDragDrop',
  'makheuxThesControllers',
  'makheuxThesFilters', 
  'makheuxThesServices'
]);

angular.module('makheux-thes').config(['$locationProvider', '$routeProvider', '$interpolateProvider',
  function($locationProvider, $routeProvider, $interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider.
      when('/pomodoros', {
        templateUrl: 'app/partials/pomodoro-list.html',
        controller: 'PomodoroListCtrl'
      }).
      when('/pomodoros/:pomodoroId', {
        templateUrl: 'app/partials/pomodoro-detail.html',
        controller: 'PomodoroDetailCtrl'
      }).
      otherwise({
        redirectTo: '/pomodoros'
      });

  }
]);
