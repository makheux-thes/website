angular.module('makheux-thes', [
  'ngRoute',
  'makheuxThesControllers',
  'makheuxThesFilters',
  'makheuxThesServices'
]).config(['$locationProvider', '$routeProvider', '$interpolateProvider',
  function($locationProvider, $routeProvider, $interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider.
      when('/tasks', {
        controller: 'TaskListCtrl'
      }).
      when('/tasks/:taskId', {
        templateUrl: 'app/partials/task-detail.html',
        controller: 'TaskDetailCtrl'
      }).
      otherwise({
        redirectTo: '/tasks'
      });
  }
]);