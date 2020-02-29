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
    $stateProvider.state(athletes);
  });
