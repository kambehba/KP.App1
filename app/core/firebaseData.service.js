(function () {
    'use strict';

    angular
      .module('app.core')
      .factory('firebaseDataService',['$q','$rootScope','FIREBASE_URL',firebaseDataService]);

   

    function firebaseDataService($q,$rootScope,FIREBASE_URL) {
        var dataRef = new Firebase(FIREBASE_URL);
        
        var projectResource = new Firebase('https://dazzling-torch-8270.firebaseio.com/projects');
       
        /*****events******/

        projectResource.on('child_added', function (snapshot) {
            $rootScope.$evalAsync(
                function handleEvalAsync() {
                    $rootScope.$broadcast("projectAdded", snapshot.val());
                });
        });



        /*****service API******/
        return ({

            getProjects: getProjects,
            
        });


        /*****public methods******/
        function getProjects() {
            
            var promise = [];
            var deferred = $q.defer();
            dataRef.once('value', function (snapshot) {
                promise = snapshot.val();
                deferred.resolve(promise);
            });
            return (deferred.promise);
        }

    } /*****end of firebaseDataService******/

})();


