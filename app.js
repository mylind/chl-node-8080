/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.get('/testhttp', function(req, res){
	console.log("req.headers.$wssp" + req.headers.$wssp);
	console.log("req.headers" + req.headers);
	if(req.headers.$wssp==80){
		res.redirect("https://chl-node-8080.mybluemix.net/testhttp");
	}
	return res.json( {
      		'output': {
        		'text': 'hahahahahaha'
      		}
    	});
});

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
