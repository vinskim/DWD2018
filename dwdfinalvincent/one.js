'use strict';
 
const yelp = require('yelp-fusion');
 
const client = yelp.client('Kr47Uk2LpQI8igSqCNnBlDj2n_-ngEsI7rHQdZX9ek6ePERJ5lMKv2HpSBZM3sGdt9lZ-K1lX6XwnWDw8zvx1VLA82iAboBUcpO7gt_jc-zJpZxj8pbytLTa2XKXWnYx');
 

function yelpAPI(word){
client.search({
  term: word,
  location: 'san francisco, ca'
}).then(response => {
    for(var i =0 ; i<20 ; i++){
        console.log(response.jsonBody.businesses[i].name);
    }
}).catch(e => {
  console.log(e);
});
}
//GET https://api.yelp.com/v3/businesses/search

yelpAPI("pizza");