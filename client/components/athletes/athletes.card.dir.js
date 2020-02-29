(function() {
  "use strict";

  angular.module("ngAthletes").directive("athletesCard", function() {
    return {
      templateUrl: "components/athletes/athletes.card.tpl.html",
      scope: {
        athletes: "=athletes"
      },
      controller: athletesCardController,
      controllerAs: "vm"
    };
    function athletesCardController($state, $scope, $mdDialog) {
      let vm = this;
      vm.editAthlete = editAthlete;

      function editAthlete(athlete) {}
    }
  });
})();
