(function () {
    'use strict';

    angular
      .module('app.core')
      .factory('firebaseDataService', ['$q', '$rootScope', '$firebaseArray', 'FIREBASE_URL', firebaseDataService]);

   

    function firebaseDataService($q, $rootScope, $firebaseArray,FIREBASE_URL) {
        var dataRef = new Firebase(FIREBASE_URL);
        var projects = [];
        var projectResource = new Firebase('https://dazzling-torch-8270.firebaseio.com/projects');
        var projectId = 0;
        /*****events******/

        projectResource.on('child_added', function (snapshot) {
            $rootScope.$evalAsync(
                function handleEvalAsync() {
                    projects.push(snapshot.val());
                    
                    $rootScope.$broadcast("projectAdded", projects);
                });
        });



        /*****service API******/
        return ({

            getProjects: getProjects,
            addProject: addProject,
            deleteProject: deleteProject
            
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

        function addProject(project) {

            getNextAvilableId().then(
                    function (promise) {
                        var id = promise.value;
                        var newItemRef = new Firebase('https://dazzling-torch-8270.firebaseio.com/projects/' + id);
                        newItemRef.set({ id:id,status: project.status, title: project.title });
                    }
                );
        }

        function deleteProject(id) {
            var ref = new Firebase('https://dazzling-torch-8270.firebaseio.com/projects/' + id);
            ref.remove();
           
            var promise = [];
            var deferred = $q.defer();
            dataRef.once('value', function (snapshot) {
                promise = snapshot.val();
                deferred.resolve(promise);
            });
            return (deferred.promise);
        }

        
        /*****private methods******/
        function getNextAvilableId() {
            var idRef = new Firebase('https://dazzling-torch-8270.firebaseio.com/id');
            var promise = [];
            var deferred = $q.defer();
            idRef.once('value', function (snapshot) {
                promise = snapshot.val();
                deferred.resolve(promise);
                idRef.set({ value: promise.value + 1 });
            });

           
            return (deferred.promise);
        }

    } /*****end of firebaseDataService******/

})();


