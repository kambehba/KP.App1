(function () {
    'use strict';

    angular
      .module('app.core')
      .factory('projectService', ['$firebaseArray','firebaseDataService',projectService]);

   
    function projectService($firebaseArray, firebaseDataService) {
        var h = {};
        var service = {
            getProjects: getProjects,
           //Projects: Projects
        };
        


        function getProjects() {
            firebaseDataService.GetAllProjects().then(function () { var e =5; });
            
        };



        return service;

    

        

        //function Party() {
        //    this.name = '';
        //    this.phone = '';
        //    this.size = '';
        //    this.done = false;
        //    this.notified = false;
        //}
    }

})();