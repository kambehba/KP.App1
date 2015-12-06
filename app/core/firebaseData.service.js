(function () {
    'use strict';

    angular
      .module('app.core')
      .factory('firebaseDataService',['$q','FIREBASE_URL',firebaseDataService]);

    var f = {};
    function firebaseDataService($q,FIREBASE_URL) {



        function GetAllProjects() {
            var projects = [];
            var dataRef = new Firebase(FIREBASE_URL);
            var deferred = $q.defer();
            dataRef.once('value', function (snapshot) {
                project = snapshot.val();
                deferred.resolve(project);
                return deferred.promise;

            })

        };

        return f;


 
        //var service = this;
        //var project = {};
      
        //var deferred = $q.defer();
        //var root = new Firebase(FIREBASE_URL);
        //root.once('value', function(dataSnapshot) {

        //    project = dataSnapshot.val();
        //    deferred.resolve(project);

        //    //var service = {
        //    //    root: root,
        //    //    project: dataSnapshot.val()

        //    //};
        //    return deferred.promise;

        //});

        ////var g = project;
        ////var ref = new Firebase(FIREBASE_URL);
        ////f = $firebaseObject(ref.child('project1'));
        ////var service = {
        ////    root: root,
        ////    projects: root.child('id'),
         
        ////};

        //return service;


    }

})();


