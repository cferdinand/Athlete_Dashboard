(function() {
  "use strict";

  angular.module("ngAthletes").directive("basicAthlete", function() {
    return {
      templateUrl: "components/forms/basic_info/athletes-basic.tpl.html",
      scope: {
        athlete: "=athlete"
      },
      controller: basicAthletesCtrl,
      controllerAs: "vm"
    };
    function basicAthletesCtrl($state, $scope, $mdDialog) {
      let vm = this;

      vm.editAthlete = editAthlete;
      vm.sports = ["American Football", "Football"];
      vm.countries = ["Trinidad", "United States of America"];

      function editAthlete() {
        $scope.$emit("changingField", $scope.athlete);
      }
    }
  });
})();
