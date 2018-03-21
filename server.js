// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express

var port  	 = process.env.PORT || 3429; 				// set the port


app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

app.get('/', function (req, res) {
  res.render('index', {});
});

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
