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

    vm.onSubmit = function () {
      vm.formError = '';
      if (!vm.formData || !vm.formData.name || !vm.formData.rating || !vm.formData.reviewText) {
        vm.formError = 'All fields required, please try again';
        return false;
      } else {
        console.log(vm.formData);
        return false;
      }
    };
  }

}) ();