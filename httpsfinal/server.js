var https = require('https');
var fs = require('fs'); // Using the filesystem module

var credentials = {
  key: fs.readFileSync('my-key.pem'),
  cert: fs.readFileSync('my-cert.pem')
};

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
var yelp = require('yelp-fusion');
var client = yelp.client('Kr47Uk2LpQI8igSqCNnBlDj2n_-ngEsI7rHQdZX9ek6ePERJ5lMKv2HpSBZM3sGdt9lZ-K1lX6XwnWDw8zvx1VLA82iAboBUcpO7gt_jc-zJpZxj8pbytLTa2XKXWnYx');

function yelpAPI(word){
	return client.search({
	  term: word,
	  location: 'san francisco, ca'
	}).then(response => {
		var images = '';

		for(var i =0 ; i<20 ; i++){
			//console.log(response.jsonBody.businesses[i].image_url);
			images += '<img src="'+response.jsonBody.businesses[i].image_url+'">';
		}

		return images;
	}).catch(e => {
	  console.log(e);
	});
}


app.use(urlencodedParser); 

			
var image;



app.get('/', function (req, res) {
  res.send(" difficult to understand Namso " );
});

app.use(express.static('public'));



app.get('/yelp/:word', function (req, res) {
	yelpAPI(req.params.word)
		.then(function(images){
			res.send(images);
		})
    
});





app.get('/processit', function(req, res) {
    var textvalue = req.query.textfield;
    res.send("<h1>You submitted: " + image +"</h1>");
});	




app.get('/datalist', function (req, res) {
	var fileToSend = "somerandomfile.txt";
	res.sendfile(fileToSend, {root: './public'}); // Files inside "public" folder
});

// 

var httpsServer = https.createServer(credentials, app);

// Default HTTPS Port
httpsServer.listen(1337);