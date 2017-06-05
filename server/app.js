var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');

app.set("port", (process.env.PORT || 5000));
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});

app.listen(port, function() {
  console.log("Listening on port: ", port);
});

module.exports = app;
