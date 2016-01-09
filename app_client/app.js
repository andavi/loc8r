angular.module('loc8rApp', []);

function config ($routeProvider) {
  $routeProvider
    .when('/', {

    })
    .otherwise({redirectTo: '/'});
}

angular
  .module('loc8rApp')
  .config(['$routeProvider', config]);