(function () {

  angular
    .module('loc8rApp')
    .controller('reviewModalCtrl', reviewModalCtrl);

  reviewModalCtrl.$inject = ['$uibModalInstance', 'locationData'];
  function reviewModalCtrl ($uibModalInstance, locationData) {
    var vm = this;
    vm.locationData = locationData;

    vm.modal = {
      cancel: function () {
        $uibModalInstance.dismiss('cancel');
      }
    };
  }

}) ();