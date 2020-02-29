(function() {
  "use strict";

  angular.module("ngAthletes").directive("aboutAthlete", function() {
    return {
      templateUrl: "components/forms/about/athletes-about.tpl.html",
      scope: {
        athletes: "=athletes"
        // athletesFilter: "=athletesFilter"
      },
      controller: aboutAthletesCtrl,
      controllerAs: "vm"
    };
    function aboutAthletesCtrl($state, $scope, $mdDialog) {
      let vm = this;
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
      function routeToSummary() {
        $state.go("athletes.new.summary");
      }
    }
  });
})();
