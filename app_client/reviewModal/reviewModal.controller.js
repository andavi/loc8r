(function () {

  angular
    .module('loc8rApp')
    .controller('reviewModalCtrl', reviewModalCtrl);

  reviewModalCtrl.$inject = ['$uibModalInstance', 'loc8rData', 'locationData'];
  function reviewModalCtrl ($uibModalInstance, loc8rData, locationData) {
    var vm = this;
    vm.locationData = locationData;

    vm.modal = {
      cancel: function () {
        $uibModalInstance.dismiss('cancel');
      },
      close: function (result) {
        $uibModalInstance.close(result);
      }
    };

    vm.doAddReview = function (locationid, formData) {
      loc8rData.addReviewById(locationid, {
        rating: formData.rating,
        reviewText: formData.reviewText
      })
        .success (function(data) {
          //console.log('Success!');
          vm.modal.close(data);
        })
        .error (function(data) {
          vm.formError = 'Your review has not been saved, try again';
        });
    };

    vm.onSubmit = function () {
      vm.formError = '';
      if (!vm.formData || !vm.formData.rating || !vm.formData.reviewText) {
        vm.formError = 'All fields required, please try again';
        return false;
      } else {
        vm.doAddReview(vm.locationData.locationid, vm.formData);
      }
    };
  }

}) ();