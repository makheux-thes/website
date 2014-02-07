// services.js

angular.module('makheuxThesServices', ['ngResource']);

angular.module('makheuxThesServices').factory('Tasks', ['$resource',
  function($resource){
    return $resource('api/tasks/:taskId.json', {}, {
      query: {method:'GET', params:{taskId:'list'}, isArray:true}
    });
  }]);