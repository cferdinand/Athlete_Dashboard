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
      vm.checkUrl = checkUrl;

      $scope.$on("newAthlete", function(event, athlete) {
        vm.athletes.push(athlete);
        $state.go("athletes");
        showToast("Athlete Saved!");
      });

      $scope.$on("editSaved", function() {
        showToast("Edit Saved!");
      });

      $scope.$on("closedForm", function() {
        $scope.hideAthletes = true;
        vm.checkUrl();
      });

      athletesFactory.getAthletes().then(function(athletes) {
        vm.athletes = athletes.data;
      });

      function checkUrl() {
        if (window.location.hash.includes("new")) {
          $scope.hideAthletes = false;
        } else {
          $scope.hideAthletes = true;
        }
      }
      function addAthlete() {
        $state.go("athletes.new");
        $timeout(function() {
          $scope.hideAthletes = false;
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
