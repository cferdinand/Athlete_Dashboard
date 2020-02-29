(function() {
  "use strict";

  angular
    .module("ngAthletes")
    .controller("athletesCtrl", function($scope, $state, athletesFactory) {
      let vm = this;

      athletesFactory.getAthletes().then(function(athletes) {
        vm.athletes = athletes.data;
      });
    });
})();
