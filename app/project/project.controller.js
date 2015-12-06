(function () {
    'use strict';

    angular
      .module('app.project')
      .controller('ProjectController', ['$rootScope', 'firebaseDataService', ProjectController]);

    //ProjectController.$inject = ['$rootScope', 'projectService'];

    function ProjectController($rootScope,firebaseDataService, projectService) {
        var vm = this;
        vm.gg = 'ssss2222ss';
      

        firebaseDataService.getProjects().then
               (
                       function (projects) {
                           vm.projects = projects;
                           var g = 5;
                       }
               );

    }

})();
