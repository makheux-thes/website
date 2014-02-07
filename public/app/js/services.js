// services.js

angular.module('makheuxThesServices', ['ngResource']);
 
angular.module('makheuxThesServices').factory('Pomodoro', ['$resource',
  function($resource){
    return $resource('api/pomodoros/:pomodoroId.json', {}, {
      query: {method:'GET', params:{pomodoroId:'list'}, isArray:true}
    });
  }]);