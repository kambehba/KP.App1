(function () {
    'use strict';

    angular
      .module('app.core')
      .factory('firebaseDataService',['$q','FIREBASE_URL',firebaseDataService]);

   
    function firebaseDataService($q,FIREBASE_URL) {

        return ({

            getProjects: getProjects,
            
        });


        //public methods
        function getProjects() {
            
            var projects = [];
            var dataRef = new Firebase(FIREBASE_URL);
            var deferred = $q.defer();
            dataRef.once('value', function (snapshot) {
                projects = snapshot.val();
                deferred.resolve(projects);
            });
            return (deferred.promise);
        }

    }//end of firebaseDataService

})();


