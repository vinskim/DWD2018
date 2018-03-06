var Yelp = require('yelp-api-v3');
 
var yelp = new Yelp({
  app_id: 'rDPAF2xWQQqkSuEFQHizOw',
  app_secret: 'Kr47Uk2LpQI8igSqCNnBlDj2n_-ngEsI7rHQdZX9ek6ePERJ5lMKv2HpSBZM3sGdt9lZ-K1lX6XwnWDw8zvx1VLA82iAboBUcpO7gt_jc-zJpZxj8pbytLTa2XKXWnYx'
});
 
// https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-search.md 
yelp.search({term: 'food', location: '90210', price: '1,2,3', limit: 10})
.then(function (data) {
    console.log(data);
})
.catch(function (err) {
    console.error(err);
});
 
