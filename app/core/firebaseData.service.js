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
            
            var promise = [];
            var dataRef = new Firebase(FIREBASE_URL);
            var deferred = $q.defer();
            dataRef.once('value', function (snapshot) {
                promise = snapshot.val();
                deferred.resolve(promise);
            });
            return (deferred.promise);
        }

    }//end of firebaseDataService

})();


