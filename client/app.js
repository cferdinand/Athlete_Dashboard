angular
  .module("ngAthletes", ["ngMaterial", "ui.router"])
  .config(function($mdThemingProvider, $stateProvider) {
    $mdThemingProvider
      .theme("default")
      .primaryPalette("blue")
      .accentPalette("orange");

    var athletes = {
      name: "athletes",
      url: "/athletes",
      templateUrl: "components/athletes.html",
      controller: "athletesCtrl as vm"
    };
    var newAthlete = {
      name: "athletes.new",
      url: "/new",
      templateUrl: "components/forms/new-athlete.tpl.html",
      controller: "newAthletesCtrl as vm"
    };

    $stateProvider.state(athletes);
    $stateProvider.state(newAthlete);
  });
