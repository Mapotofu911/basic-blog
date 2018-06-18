var express = require("express");
var MongoClient = require("mongodb");
var bodyParser = require('body-parser')
var cons = require('consolidate');

var app = express();
var url = process.env.URL || "mongodb://localhost:27017/";
var dbName = process.env.DBNAME || "blog";
var port = process.env.PORT || 8000;

app.engine('html', cons.pug);
app.set('view engine', 'html');
app.set('views',  __dirname +  '/views')

var routes = require("./routes");

//permet le post
app.use(bodyParser.urlencoded({ extended: false }))

MongoClient.connect(url, function(err, client) {
  if(err) throw err;

  routes(app);
  
  app.client = client;
  app.db = client.db(dbName);

  app.listen(port, function() {
    console.log("now listening on http://localhost:" + port)
  });
});

module.exports = app;
