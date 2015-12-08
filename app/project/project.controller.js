(function () {
    'use strict';

    angular
      .module('app.project')
      .controller('ProjectController', ['$scope','$location','firebaseDataService', ProjectController]);

    function ProjectController($scope,$location, firebaseDataService, projectService) {

        var vm = this;
        vm.projects = [];
        vm.project = { id: 0, status: '', title: '' };
        $scope.temp = [];

        /*****event handlers******/
        $scope.$on("projectAdded", function (event, project) {
            if ($scope.isLoading) return;
            addProject(project);

        })
      
        /*****service calls******/
        firebaseDataService.getProjects().then
               (
                       function (promise) {
                           vm.projects = promise.projects;
                           vm.project = vm.projects[0];
                          
                       }
               );


        /*****private methods******/
        function addProject(project) {
            $scope.temp.push(project);
            vm.projects = $scope.temp
          
          
        };

        /*****puplic methods******/

        vm.AddNewProject = function() {
            $location.path('/add');
        }

    }/*****end of projectController******/

})();
