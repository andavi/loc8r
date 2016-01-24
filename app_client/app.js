(function () {

  angular.module('loc8rApp', ['ngRoute']);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
  }

  angular
    .module('loc8rApp')
    .config(['$routeProvider', '$locationProvider', config]);

}) ();