var Yelp = require('yelpv3');

var yelp = new Yelp({
  app_id: 'fSto5388r9X-YVz0T61iPw',
  app_secret: 'vWt3j83BJVDDPzMsTL5HeaOT7DN0AoCUwPuLecQ5Bl22VRx6qocGkk1wneKjiecP'
});

// https://www.yelp.com/developers/documentation/v3/business_search
yelp.search({term: 'food', location: '90210', limit: 10})
.then(function (data) {
    console.log(data);
})
.catch(function (err) {
    console.error(err);
});