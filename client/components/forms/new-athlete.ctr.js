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
        $state.go("athletes.new.about");
      }
      function routeToBasic() {
        $state.go("athletes.new.basic");
      }
      function routeToSummary() {
        $state.go("athletes.new.summary");
      }
    });
})();
