(function () {
    'use strict';

    angular
      .module('app.project')
      .controller('ProjectController', ['$scope','$location','firebaseDataService', ProjectController]);

    function ProjectController($scope, $location, firebaseDataService, projectService) {
       
        var vm = this;
        vm.projects = [];
        vm.project = {id:0, status: null, title: null };
        $scope.temp = [];
       
        
        /*****event handlers******/
        $scope.$on("projectAdded", function (event, projects) {
            if ($scope.isLoading) return;
            //reload items
            firebaseDataService.getProjects().then(function (promise) {
                vm.projects = promise.projects;

            });

        });

        $scope.$on("projectChanged", function (event, project) {
            if ($scope.isLoading) return;
            //reload items
            firebaseDataService.getProjects().then(function (promise) {
                vm.projects = promise.projects;

            });

        });

        /*****service calls******/
        firebaseDataService.getProjects().then(function (promise) {
                            vm.projects = promise.projects;

                });
        

        /*****private methods******/
        function reLoadProjects(projects) {
            vm.projects = projects;
           
        };


        /*****puplic methods******/

        vm.GoToAddPage = function () {
            $location.path('/add');
        }

        vm.GoToUpdatePage = function (project) {
            $location.path('/update');
            firebaseDataService.selectedProject = project;
           
            
        }

        vm.DeleteProject = function (id) {

            firebaseDataService.deleteProject(id).then
            (
            firebaseDataService.getProjects().then
               (
                       function (promise) {
                           vm.projects = promise.projects;
                       }
               )
            );
        }

        vm.AddProject = function () {
            

            firebaseDataService.addProject(vm.project);
            $location.path('/');
        }

          
    }/*****end of ProjectController******/

})();
