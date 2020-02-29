(function() {
  "use strict";

  angular
    .module("ngAthletes")
    .controller("athletesCtrl", function(
      $scope,
      $state,
      athletesFactory,
      $mdToast,
      $timeout
    ) {
      let vm = this;
      vm.addAthlete = addAthlete;

      $scope.$on("newAthlete", function(athlete) {
        vm.athletes.push(athlete);
        $state.go("athletes");
        showToast("Athlete Saved!");
      });

      $scope.$on("editSaved", function() {
        showToast("Edit Saved!");
      });

      $scope.$on("closedForm", function() {
        $scope.hideAthletes = false;
      });

      athletesFactory.getAthletes().then(function(athletes) {
        vm.athletes = athletes.data;
      });

      function addAthlete() {
        $state.go("athletes.new");
        $timeout(function() {
          $scope.hideAthletes = true;
        });
      }

      function showToast(message) {
        $mdToast.show(
          $mdToast
            .simple()
            .content(message)
            .position("top, right")
            .hideDelay(3000)
        );
      }
    });
})();
