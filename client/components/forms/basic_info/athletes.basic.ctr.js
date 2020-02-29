(function() {
  "use strict";

  angular.module("ngAthletes").directive("basicAthlete", function() {
    return {
      templateUrl: "components/forms/basic_info/athletes-basic.tpl.html",
      scope: {
        athletes: "=athletes"
      },
      controller: basicAthletesCtrl,
      controllerAs: "vm"
    };
    function basicAthletesCtrl($state, $scope, $mdDialog) {
      let vm = this;
    }
  });
})();
