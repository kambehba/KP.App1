(function () {
	'use strict';

	angular
      .module('app.project')
      .controller('ProjectUpdateController', ['$scope', '$location', 'firebaseDataService', ProjectUpdateController]);

	function ProjectUpdateController($scope, $location, firebaseDataService) {

		var vm = this;
		vm.project = {id:0,status:"",title:""};
		vm.project = firebaseDataService.selectedProject;



		/*****puplic methods******/
		vm.Save = function () {
			firebaseDataService.updateProject(vm.project).then(function () { $location.path('/'); });
			
		}
			


	}/*****end of ProjectUpdateController******/

})();
