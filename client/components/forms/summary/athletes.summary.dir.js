(function() {
  "use strict";

  angular.module("ngAthletes").directive("summaryAthlete", function() {
    return {
      templateUrl: "components/forms/summary/athletes-summary.tpl.html",
      scope: {
        athletes: "=athletes"
      },
      controller: summaryAthletesCtrl,
      controllerAs: "vm"
    };
    function summaryAthletesCtrl($state, $scope, $mdDialog) {
      let vm = this;
    }
  });
})();
