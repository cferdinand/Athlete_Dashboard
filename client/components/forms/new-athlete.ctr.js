(function() {
  "use strict";

  angular
    .module("ngAthletes")
    .controller("newAthletesCtrl", function(
      $state,
      $scope,
      athletesFactory,
      $timeout
    ) {
      var vm = this;
      vm.closeForm = closeForm;
      vm.saveAthlete = saveAthlete;
      vm.routeToAbout = routeToAbout;
      vm.routeToBasic = routeToBasic;
      vm.routeToSummary = routeToSummary;

      function closeForm() {
        $scope.$emit("closedForm");
        $state.go("athletes");
      }

      function saveAthlete(athlete) {
        athletesFactory.addAthlete(athlete).then(function(newAthlete) {
          $scope.$emit("newAthlete", newAthlete.data);
        });
      }
      function routeToAbout() {
        $scope.showBasic = true; // reverse
        $scope.showAbout = true;
        $scope.showSummary = false;
      }
      function routeToBasic() {
        $scope.showAbout = false;
        $scope.showBasic = false; // reverse
        $scope.showSummary = false;
      }
      function routeToSummary() {
        $scope.showAbout = false;
        $scope.showBasic = true; // reverse
        $scope.showSummary = true;
      }
    });
})();
