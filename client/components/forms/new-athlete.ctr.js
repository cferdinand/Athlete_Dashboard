(function() {
  "use strict";

  angular
    .module("ngAthletes")
    .controller("newAthletesCtrl", function($state, $scope, athletesFactory) {
      var vm = this;
      vm.closeForm = closeForm;
      vm.saveAthlete = saveAthlete;
      vm.routeToAbout = routeToAbout;
      vm.routeToBasic = routeToBasic;
      vm.routeToSummary = routeToSummary;
      vm.showNext = showNext;

      $scope.showBasic = true;
      $scope.showAbout = false;
      $scope.showSummary = false;

      $scope.$on("changingField", function(event, athlete) {
        vm.athlete = athlete;
      });

      $scope.$on("editingSection", function(event, section) {
        let fn = `routeTo${section}`;
        vm[fn]();
      });

      function closeForm() {
        $scope.$emit("closedForm");
        $state.go("athletes");
      }

      function saveAthlete(athlete) {
        athlete.team = athlete.team.split(/[, |,]+/);
        athletesFactory.addAthlete(athlete).then(function(newAthlete) {
          $scope.$emit("newAthlete", newAthlete.data);
        });
      }
      function routeToAbout() {
        $scope.showBasic = false;
        $scope.showAbout = true;
        $scope.showSummary = false;
      }
      function routeToBasic() {
        $scope.showAbout = false;
        $scope.showBasic = true;
        $scope.showSummary = false;
      }
      function routeToSummary() {
        $scope.showAbout = false;
        $scope.showBasic = false;
        $scope.showSummary = true;
      }

      function showNext() {
        if ($scope.showAbout === false) {
          vm.routeToAbout();
        } else if ($scope.showSummary === false) {
          vm.routeToSummary();
        }
      }
    });
})();
