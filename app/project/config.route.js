﻿(function () {
    'use strict';

    angular
      .module('app.project')
      .config(configFunction, ['$routeProvider']);

   
    function configFunction($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/project/project.list.html',
            controller: 'ProjectController',
            controllerAs: 'vm'

        })

        .when('/add', {
            templateUrl: 'app/project/project.add.html',
            controller: 'ProjectController',
            controllerAs: 'vm'
        })
        .when('/delete', {
            templateUrl: 'app/project/project.delete.html',
            controller: 'ProjectController',
            controllerAs: 'vm'
        })
        .when('/update', {
            templateUrl: 'app/project/project.update.html',
            controller: 'ProjectUpdateController',
            controllerAs: 'vm'
        });

        

        
    }
    

  
})();
