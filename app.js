var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    ent = require('ent'),
    fs = require('fs');

var url = 'mongodb://localhost:27017/camp-bot',
    db = require('./db');

db.connect(url, function(err){
    if (err) {
        console.log('Unable to connect db');
        process.exit(1);
    } else {
        server.listen(8080, function(){
            console.log('Listening on port 8080');
        });
    }
});

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});