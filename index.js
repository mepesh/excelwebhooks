var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//    res.send('Wass up buddy');
// })

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello DialogFlow web services!');
})

// This responds a GET request for the /list_user page.
app.get('/getajoke', function (req, res) {
   console.log("Got a GET request for /getajoke");
   res.send('Why are eggs not very much into jokes? Because they could crack up.');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})




var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})