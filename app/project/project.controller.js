(function () {
    'use strict';

    angular
      .module('app.project')
      .controller('ProjectController', ['$rootScope', 'firebaseDataService', ProjectController]);

    //ProjectController.$inject = ['$rootScope', 'projectService'];

    function ProjectController($rootScope,firebaseDataService, projectService) {
        var vm = this;
        vm.gg = 'ssss2222ss';
        vm.projects = [];
        vm.project = { id: 0, status: '', title: '' };
      

        firebaseDataService.getProjects().then
               (
                       function (promise) {
                           vm.projects = promise.projects;
                           vm.project = vm.projects[0];
                          
                       }
               );

    }

})();
