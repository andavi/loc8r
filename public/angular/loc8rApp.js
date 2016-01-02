angular.module('loc8rApp', []);

var _isNumeric = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
var formatDistance = function() {
  return function(distance) {
    var numDistance, unit;
    if (distance && _isNumeric(distance)) {
      if (distance > 0.189) { // only convert to feet if distance < 1000ft
        numDistance = parseFloat(distance).toFixed(1);
        unit = 'mi';
      } else {
        numDistance = parseInt(distance * 5280, 10);
        unit = 'ft';
      }
      return numDistance + ' ' + unit;
    } else {
      return '?';
    }
  };
};

var locationListCtrl = function($scope, loc8rData) {
  $scope.message = 'Searching for nearby places';
  loc8rData
    .success(function(data) {
      $scope.message = data.length > 0 ? '' : 'No locations found';
      $scope.data = {locations: data};
    })
    .error(function(e) {
      $scope.message = 'Sorry, something\'s gone wrong';
    });
};

var ratingStars = function() {
  return {
    scope: {
      thisRating: '=rating'
    },
    templateUrl: '/angular/rating-stars.html'
  };
};

var loc8rData = function($http) {
  return $http.get('/api/locations?lng=-78.6296785&lat=35.7950218&maxDistance=20');
  //return [{
  //  name: 'Burger Queen',
  //  address: '125 High Street, Reading, RG6 1PS',
  //  rating: 3,
  //  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  //  distance: '0.296456',
  //  _id: '5370a35f2536f6785f8dfb6a'
  //},{
  //  name: 'Costy',
  //  address: '125 High Street, Reading, RG6 1PS',
  //  rating: 5,
  //  facilities: ['Hot drinks', 'Food', 'Alcoholic drinks'],
  //  distance: '0.7865456',
  //  _id: '5370a35f2536f6785f8dfb6a'
  //},{
  //  name: 'Cafe Hero',
  //  address: '125 High Street, Reading, RG6 1PS',
  //  rating: 0,
  //  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  //  distance: '0.94561236',
  //  _id: '5370a35f2536f6785f8dfb6a'
  //},{
  //  name: 'Starcups',
  //  address: '125 High Street, Reading, RG6 1PS',
  //  rating: 1,
  //  facilities: ['Hot drinks', 'Food', 'Cold drinks'],
  //  distance: '1.06548',
  //  _id: '5370a35f2536f6785f8dfb6a'
  //},{
  //  name: 'Simon\'s cafe',
  //  address: '125 High Street, Reading, RG6 1PS',
  //  rating: 3,
  //  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  //  distance: '2.3654',
  //  _id: '5370a35f2536f6785f8dfb6a'
  //},{
  //  name: 'Sally\'s pub',
  //  address: '125 High Street, Reading, RG6 1PS',
  //  rating: 5,
  //  facilities: ['Hot drinks', 'Food', 'Alcoholic drinks'],
  //  distance: '4.213654',
  //  _id: '5370a35f2536f6785f8dfb6a'
  //}];
};

angular
  .module('loc8rApp')
  .controller('locationListCtrl', locationListCtrl)
  .filter('formatDistance', formatDistance)
  .directive('ratingStars', ratingStars)
  .service('loc8rData', loc8rData);