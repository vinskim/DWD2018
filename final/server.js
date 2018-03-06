var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser); 

// Database to store data, don't forget autoload: true
var Datastore = require('nedb');
var db = new Datastore({filename: "data.db", autoload: true});
			


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
  res.send(" difficult to understand " );
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});



app.get('/index.html', function (req, res) {
	var fileToSend = "index.html";
	res.sendfile(fileToSend, {root: './'}); // Files inside "public" folder
});


app.get('/yelp', function (req, res) {

	var word = req.query.word;

	var Yelp = require('yelp-api-v3');

	var yelp = new Yelp({
	  app_id: 'fSto5388r9X-YVz0T61iPw',
	  app_secret: 'vWt3j83BJVDDPzMsTL5HeaOT7DN0AoCUwPuLecQ5Bl22VRx6qocGkk1wneKjiecP'
	});
	console.log(yelp);
	
	// https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-search.md
	yelp.search({term: word, location: '10003', limit: 10})
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

		res.send(data);
		
	})
	.catch(function (err) {
		console.error(err);
	});


});



//app.post('/processit', function(req, res) {
//    var textvalue = req.body.textfield;
//    res.send("You submitted: " + textvalue);
//});	



app.get('/processit', function(req, res) {
    var textvalue = req.query.textfield;
    res.send("You submitted: " + textvalue);
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
