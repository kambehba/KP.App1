﻿(function () {
    'use strict';

    angular
      .module('app.project')
      .controller('ProjectController', ['$scope','$location','firebaseDataService', ProjectController]);

    function ProjectController($scope, $location, firebaseDataService, projectService) {


        var vm = this;
        var ss = {};
        vm.projects = [];
        vm.project2 = [];
        vm.project = {status: null,title: null};
        $scope.temp =[];


        /*****event handlers******/
        $scope.$on("projectAdded", function (event, projects) {
            if ($scope.isLoading) return;
            reLoadProjects(projects);

        })

        /*****service calls******/
        firebaseDataService.getProjects().then
               (
                       function (promise) {
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

       
    }/*****end of projectController******/

})();
