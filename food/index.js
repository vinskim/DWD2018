// var Yelp = require('yelp-api-v3');

// var yelp = new Yelp({
//   app_id: 'fSto5388r9X-YVz0T61iPw',
//   app_secret: 'vWt3j83BJVDDPzMsTL5HeaOT7DN0AoCUwPuLecQ5Bl22VRx6qocGkk1wneKjiecP'
// });

// // https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-search.md
// yelp.search({term: 'food', location: '90210', price: '1,2,3', limit: 1})
// .then(function (data) {
//     let tmp =JSON.parse(data)
//     tmp = tmp["businesses"][0]
//     console.log("id :" + tmp["id"]);
//     console.log("name :" + tmp["name"]);
//     console.log("image_url :" + tmp["image_url"]);
//     console.log("url :" + tmp["url"]);
//   //  document.getElementById("title").innerHTML = tmp["name"];

// })
// .catch(function (err) {
//     console.error(err);
// });


function myFunction() {
    document.getElementById("title").innerHTML = "NAMSO IS ROCKING EVEN MORE";
}
myFunction();
