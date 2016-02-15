(function () {
  angular
    .module('loc8rApp')
    .service('authentication', authentication);

  authentication.$inject = ['$window'];
  function authentication ($window) {

    var saveToken = function (token) {
      $window.localStorage['loc8r-token'] = token;
    };

    var getToken = function () {
      return $window.localStorage['loc8r-token'];
    };

    return {
      saveToken: saveToken,
      getToken: getToken
    };
  }
}) ();