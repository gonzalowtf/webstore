//app.js

var port = process.env.PORT || 3000;
var express = require('express'),
    app = express(),
    server =require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(3000);



app.get('/',function(req,res){

	res.sendfile(__dirname + '/page.html');
});    

console.log("server running at //localhost:3000");

