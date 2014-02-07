// controllers.js
angular.module('makheuxThesControllers', [])
    .controller('MainCtrl', ['$scope', '$location', function($scope, $location) {}])
    .controller('CuttingBoardCtrl', ['$scope', function($scope) {}])
    .controller('TaskCtrl', ['$scope', function($scope) {}])
    .controller('PomodoroTimerCtrl', ['$scope', function($scope) {}])
    .controller('TaskListCtrl', ['$scope', 'Tasks', function($scope, Tasks) {
        $scope.tasks = Tasks.query();
        $scope.orderProp = 'priority';
    }])
    .controller('TaskDetailCtrl', ['$scope', '$routeParams', 'Tasks', function($scope, $routeParams, Tasks) {
        $scope.task = Tasks.get({taskId: $routeParams.taskId}, function(task) {

        });
        //$scope.mainImageUrl = task.images[0];
    }])
;