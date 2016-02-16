(function () {
  angular
    .module('loc8rApp')
    .controller('navigationCtrl', navigationCtrl);

  navigationCtrl.$inject = ['$location', 'authentication', '$route'];
  function navigationCtrl($location, authentication, $route) {
    var vm = this;

    vm.currentPath = $location.path();

    vm.isLoggedIn = authentication.isLoggedIn();

    vm.currentUser = authentication.currentUser();

    vm.logout = function() {
      authentication.logout();
      if ($location.path() === '/'){
        $route.reload();
      } else {
        $location.path('/');
      }
    };
  }
}) ();