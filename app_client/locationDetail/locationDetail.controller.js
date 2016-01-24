(function () {

  angular
    .module('loc8rApp')
    .controller('locationDetailCtrl', locationDetailCtrl);

  function locationDetailCtrl () {
    var vm = this;

    vm.pageHeader = {
      title: 'Location detail page'
    };
  }
  
}) ();