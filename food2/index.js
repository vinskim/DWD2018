var Yelp = require('yelp-api-v3');

var yelp = new Yelp({
  app_id: 'rDPAF2xWQQqkSuEFQHizOw',
  app_secret: 'TSozNRiCTFMGbDWcBZTeL5IXXU8PvNplxvCw4jK8GGCCFU18ewWqZZ6fbZYNmYHm'
});

// https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-search.md
yelp.search({term: 'food', location: '90210', price: '1,2,3', limit: 10})
.then(function (data) {
    console.log(data);

    let tmp =JSON.parse(data)

        tmp = tmp["businesses"]

    for(let i=0; i<tmp.length; i++) {
       console.log("id :" + tmp[i]["id"]);
       console.log("name :" + tmp[i]["name"]);
       console.log("image_url :" + tmp[i]["image_url"]);
       console.log("url :" + tmp[i]["url"]);
    }
    
})
.catch(function (err) {
    console.error(err);
});