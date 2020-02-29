(function() {
  "use strict";

  angular.module("ngAthletes").directive("summaryAthlete", function() {
    return {
      templateUrl: "components/forms/summary/athletes-summary.tpl.html",
      scope: {
        athletes: "=athletes"
        // athletesFilter: "=athletesFilter"
      },
      controller: summaryAthletesCtrl,
      controllerAs: "vm"
    };
    function summaryAthletesCtrl($state, $scope, $mdDialog) {
      let vm = this;
      //   vm.editAthlete = editAthlete;

      //   function editAthlete(athlete) {
      //     // vm.editing = true;
      //     // openSidebar();
      //     // vm.athlete = athlete;
      //     $state.go("athletes.edit", {
      //       id: athlete._id,
      //       athlete: athlete
      //     });
      //   }
      //   function saveClassified(classified) {
      //     if (classified) {
      //       classified.contact = {
      //         name: "Christian Ferdinand",
      //         phone: "(555) 555-5555",
      //         email: "christianferdinand@mail.com"
      //       };
      //       classifiedsFactory
      //         .addClassified(classified)
      //         .then(function(newClassified) {
      //           $scope.$emit("newClassified", newClassified.data);
      //           vm.sidenavOpen = false;
      //         });
      //     }
      //   }
    }
  });
})();
