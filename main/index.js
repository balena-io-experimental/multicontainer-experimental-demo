var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'), { multiArgs: true });
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello world');
  //request.getAsync("http://foo:8081/greeting").spread((resp, body) => {
  //  res.send('Proxied from foo: ' + body);
  //});
});

//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {

  var port = server.address().port;
  console.log('Example app (main) listening on port ', port);

});
