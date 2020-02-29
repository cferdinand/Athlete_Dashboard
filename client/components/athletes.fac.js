(function() {
  "use strict";
  angular.module("ngAthletes").factory("athletesFactory", $http => {
    function getAthletes() {
      return $http.get("api/athletes");
    }
    function updateAthlete(athlete) {
      return $http.put("/api/update/athletes", athlete);
    }
    function addAthlete(athlete) {
      return $http.post("/api/add/athletes", athlete);
    }
    return {
      getAthletes: getAthletes,
      updateAthlete: updateAthlete,
      addAthlete: addAthlete
    };
  });
})();
