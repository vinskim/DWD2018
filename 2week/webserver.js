var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.get('/', function (req, res) {
//  res.send('Hello World!')
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/somethingelse', function (req, res) {
  res.send('<html><body><h1>Something Else</h1></body></html>')
})

app.get('/randomfile', function (req, res) {
	var fileToSend = "somerandomfile.txt";
	res.sendfile(fileToSend, {root: './public'}); // Files inside "public" folder
});

app.post('/formpost', function (req,res) {
    //console.log("from index.html");
    //console.log(req);
    console.log(req.body.textfield);
})

var archive = [];

app.get('/formpost', function (req,res) {
    var textValue = req.query.textfield;
    red.send("You submitted: " + textValue);
    archive.push(textValue);
})

app.get('/display', function(req,res) {
    var html = "<html><body>";
    for(var i=0; i<archive.length; i++) {
        html = html + archive[i] + "<br>";
    }
    html = html + "<body></html>";
    res.send(html);
})
