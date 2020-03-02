(function() {
  "use strict";

  angular.module("ngAthletes").directive("aboutAthlete", function() {
    return {
      templateUrl: "/components/forms/about/athletes-about.tpl.html",
      scope: {
        athlete: "=athlete"
      },
      controller: aboutAthletesCtrl,
      controllerAs: "vm"
    };
    function aboutAthletesCtrl($state, $scope, $mdDialog) {
      let vm = this;
      vm.editAthlete = editAthlete;

      function editAthlete(option) {
        if (option === "team") {
          $scope.athlete.team.push($scope.athlete.team);
        }
        $scope.$emit("changingField", $scope.athlete);
      }
    }
  });
})();
