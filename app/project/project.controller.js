(function () {
    'use strict';

    angular
      .module('app.project')
      .controller('ProjectController',['$rootScope','projectService', ProjectController]);

    //ProjectController.$inject = ['$rootScope', 'projectService'];

    function ProjectController($rootScope, projectService) {
        var vm = this;
        vm.gg = 'ss';
        vm.projects = projectService.getProjects();

    }

})();
