var http = require('http');
var fs = require('fs');
// var mysql = require('mysql');
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://127.0.0.1:27017/test", function(err, db){

    var collection = err.collection('my');
    collection.find({}).toArray(function(err, docs) {
      console.log(docs);
    });

    // взаимодействие с базой данных
    db.close();
});




http.createServer(function (req, res) {
  //let result = "";
  if (req.url == "/" || req.url == "/index.html") {
    var html = fs.readFileSync('./index.html');
    res.write(html);
    res.end();
  } else {
    console.log("/test.html?method=add&date=jjj"
      .match(/\/test.html\?method\=(.*)\&date=(.*)/i));
    var result = req.url.match(/\/test\.html\?method=([^&]*)\&date=([^&]*).*/gi);
    res.write(' ');
    res.end();
    //let metod = result[1];
    //let date = result[2];
    console.log(result);
  }
}).listen(8080);
