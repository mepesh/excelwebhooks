var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello web services!');
})

// This responds a GET request for the /list_user page.
app.get('/getajoke', function (req, res) {
   console.log("Got a GET request for /getajoke");
   res.send('Why are eggs not very much into jokes? Because they could crack up.');
})

// helo 

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})