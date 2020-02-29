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
    var aboutAthlete = {
      name: "athletes.new.about",
      url: "/about",
      templateUrl: "components/forms/about/athletes.about.tpl.html",
      controller: "aboutAthletesCtrl as vm"
    };
    var basicInfoAthlete = {
      name: "athletes.new.basic",
      url: "/basic",
      templateUrl: "components/forms/basic_info/athletes-basic.tpl.html",
      controller: "basicAthletesCtrl as vm"
    };
    var summaryAthlete = {
      name: "athletes.new.summary",
      url: "/summary",
      templateUrl: "components/forms/summary/athletes.summary.tpl.html",
      controller: "summaryAthletesCtrl as vm",
      params: {
        athlete: null
      }
    };

    $stateProvider.state(athletes);
    $stateProvider.state(newAthlete);
    $stateProvider.state(aboutAthlete);
    $stateProvider.state(basicInfoAthlete);
    $stateProvider.state(summaryAthlete);
  });
