(function() {
  "use strict";

  angular.module("ngAthletes").directive("summaryAthlete", function() {
    return {
      templateUrl: "components/forms/summary/athletes-summary.tpl.html",
      scope: {
        athlete: "=athlete"
      },
      controller: summaryAthletesCtrl,
      controllerAs: "vm"
    };
    function summaryAthletesCtrl($state, $scope, $mdDialog) {
      let vm = this;

      vm.routeToAbout = routeToAbout;
      // vm.routeToBasic = routeToBasic;
      // vm.routeToSummary = routeToSummary;

      function routeToAbout(section) {
        $scope.$emit("editingSection", section);
      }
    }
  });
})();
