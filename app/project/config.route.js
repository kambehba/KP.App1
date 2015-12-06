(function () {
    'use strict';

    angular
      .module('app.project')
      .config(configFunction, ['$routeProvider']);

   // configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/project/project.list.html',
            controller: 'ProjectController',
            controllerAs: 'vm'
           
        });
    }

  
})();
