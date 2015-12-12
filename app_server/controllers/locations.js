/* GET 'home' page */
module.exports.homelist = function(req, res) {
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: [{
      name: 'Starchunks',
      address: '125 High Street, Raleigh, NC 27604',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '300ft'
      },{
      name: 'Funkin Donuts',
      address: '321 Main Street, Raleigh, NC 27606',
      rating: 4,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '150ft'
      },{
      name: 'Beautiful Girl',
      address: '44c4 Yakisuba Way, Night City, Sprawl s.4X84',
      rating: 1,
      facilities: ['Hot drinks', 'Hot noodles', 'Metaverse access', 'Microsofts'],
      distance: '100m'
    }]
  });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
  res.render('location-info', {title: 'Location info'});
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
  res.render('location-review-form', {title: 'Add review'});
};