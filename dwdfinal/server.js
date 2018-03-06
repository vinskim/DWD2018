var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser); 

// Database to store data, don't forget autoload: true
var Datastore = require('nedb');
var db = new Datastore({filename: "data.db", autoload: true});
			
var image;


// Create a JavaScript Object with data to store
var datatosave = {
	name: "Vincent",
	message: "DWD CLASS?"
};
		

// Insert the data into the database
db.insert(datatosave, function (err, newDocs) {
	console.log("err: " + err);
	console.log("newDocs: " + newDocs);
});


// Find all of the existing docs in the database
db.find({}, function(err, docs) {
	// Loop through the results, send each one as if it were a new chat message
	for (var i = 0; i < docs.length; i++) {
		console.log(docs[i].name + " / " + docs[i].message);
	}
});



app.get('/', function (req, res) {
  res.send(" difficult to understand Namso " );
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});

app.use(express.static('public'));

// app.get('/index.html', function (req, res) {
// 	var fileToSend = "index.html";
// 	res.sendfile(fileToSend, {root: './'}); // Files inside "public" folder
// });


app.get('/yelp/:word', function (req, res) {
	yelpAPI(req.param.word);
    res.send("You submitted: " + image);
çç
});



//app.post('/processit', function(req, res) {
//    var textvalue = req.body.textfield;
//    res.send("You submitted: " + textvalue);
//});	



app.get('/processit', function(req, res) {
    var textvalue = req.query.textfield;
    res.send("<h1>You submitted: " + image +"</h1>");
});	



//app.get('/templatetest', function(req, res) {
//	var data = {person: {name: "Shawn", other: "blah"}};
//    res.render('template.ejs', data);
//});


// test
app.get('/datalist', function (req, res) {
	var fileToSend = "somerandomfile.txt";
	res.sendfile(fileToSend, {root: './public'}); // Files inside "public" folder
});

'use strict';
const yelp = require('yelp-fusion');
const client = yelp.client('Kr47Uk2LpQI8igSqCNnBlDj2n_-ngEsI7rHQdZX9ek6ePERJ5lMKv2HpSBZM3sGdt9lZ-K1lX6XwnWDw8zvx1VLA82iAboBUcpO7gt_jc-zJpZxj8pbytLTa2XKXWnYx');

function yelpAPI(word){
client.search({
  term: word,
  location: 'san francisco, ca'
}).then(response => {
    for(var i =0 ; i<20 ; i++){
		image += '<img src="'+response.jsonBody.businesses[i].image_url+'">';
        console.log(response.jsonBody.businesses[i].image_url);
    }
}).catch(e => {
  console.log(e);
});
}