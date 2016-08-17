angular.module('InfamousCriminals')
.controller('criminalsController', criminalsController);

criminalsController.$inject = ['$http'];

function criminalsController($http){
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;

	getCriminals();
	function getCriminals(){
	  $http
	    .get('http://localhost:3000/criminals')
	    .then(function(response){
	      self.all = response.data.criminals;
	  });
	}

	function addCriminal(){
	  $http
	    .post('http://localhost:3000/criminals', self.newCriminals)
	    .then(function(response){
	      getCriminals();
	  });
	  self.newCrimanal = {};
	}

}