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
        console.log(vm.athlete);
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
