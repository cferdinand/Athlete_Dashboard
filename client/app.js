angular
  .module("ngAthletes", ["ngMaterial", "ui.router", "ngRoute"])
  .config(function(
    $mdThemingProvider,
    $stateProvider,
    $locationProvider,
    $routeProvider,
    $urlRouterProvider
  ) {
    $mdThemingProvider
      .theme("default")
      .primaryPalette("blue")
      .accentPalette("orange");

    $urlRouterProvider.otherwise("/athletes");
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
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      })
      .hashPrefix("");
  });
