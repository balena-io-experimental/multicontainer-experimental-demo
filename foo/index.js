var express = require('express');
var app = express();

app.get('/greeting', function (req, res) {
  res.send('Hello from ' + process.env.RESIN_SERVICE_NAME);
});

//start a server on port 80 and log its start to our console
var server = app.listen(8081, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});
