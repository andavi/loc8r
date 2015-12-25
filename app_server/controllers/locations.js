var request = require('request');
var apiOptions = {
  server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://immense-temple-1131.herokuapp.com';
}

var renderHomepage = function(req, res, responseBody) {
  var message;
  if (!(responseBody instanceof Array)) {
    message = 'API lookup error';
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = 'No places found nearby';
    }
  }
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: responseBody,
    message: message
  });
};

/* GET 'home' page */
module.exports.homelist = function(req, res) {
  var requestOptions, path;
  path = '/api/locations';
  requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs: {
      lng: -78.62985989999999,
      lat: 35.7958669,
      maxDistance: 5
    }
  };
  request(
    requestOptions,
    function(err, response, body) {
      var i, data;
      data = body;
      if (response.statusCode === 200 && data.length) {
        for (i=0; i<data.length; i++) {
          data[i].distance = _formatDistance(data[i].distance);
        }
      }
      renderHomepage(req, res, data);
    }
  );

  var _formatDistance = function(distance) {
    var numDistance, unit;
    if (distance > 0.189) { // only convert to feet if distance < 1000ft
      numDistance = parseFloat(distance).toFixed(1);
      unit = 'mi';
    } else {
      numDistance = parseInt(distance * 5280, 10);
      unit = 'ft';
    }
    return numDistance + ' ' + unit;
  }
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
  res.render('location-info', {
    title: 'Location info',
    pageHeader: {title: 'Starchunks'},
    sidebar: {
      context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
      callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
    },
    location: {
      name: 'Starchunks',
      address: '125 High Street, Raleigh, NC 27601',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      coords: {lat: 51.455041, lng: -0.9690884},
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '7:00am',
        closing: '7:00pm',
        closed: false
      },{
        days: 'Saturday',
        opening: '8:00pm',
        closing: '5:00pm',
        closed: false
      },{
        days: 'Sunday',
        closed: true
      }],
      reviews: [{
        author: 'Andrew Davis',
        rating: 5,
        timestamp: '16 July 2015',
        reviewText: 'What a great place. I can\'t say enough good things about it.\n5 stars!'
      },{
        author: 'Henry Case',
        rating: 1,
        timestamp: '13 January 2097',
        reviewText: 'Consumerist refuse at its worst. No cyberspace access and the coffee tastes like bile.'
      }]
    }
  });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
  res.render('location-review-form', {
    title: 'Add review',
    pageHeader: {title: 'Review Starchunks'}
  });
};