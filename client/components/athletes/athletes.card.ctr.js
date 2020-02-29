(function() {
  "use strict";

  angular.module("ngAthletes").directive("athletesCard", function() {
    return {
      templateUrl: "components/athletes/athletes.card.tpl.html",
      scope: {
        athletes: "=athletes"
        // athletesFilter: "=athletesFilter"
      },
      controller: athletesCardController,
      controllerAs: "vm"
    };
    function athletesCardController($state, $scope, $mdDialog) {
      let vm = this;
      vm.editAthlete = editAthlete;

      function editAthlete(athlete) {
        // vm.editing = true;
        // openSidebar();
        // vm.athlete = athlete;
        $state.go("athletes.edit", {
          id: athlete._id,
          athlete: athlete
        });
      }
    }
  });
})();
