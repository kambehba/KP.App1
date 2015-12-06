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
           

            firebaseDataService.getProjects().then
                (
                        function (projects)
                        {
                            var e = projects;
                            var g = 5;
                        }
                );
            
        }



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