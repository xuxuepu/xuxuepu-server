var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.ws('/ws', function(ws, req) {
    ws.on('message', function(msg) {
        console.log(msg);


    });
    setInterval(function(){
        ws.send('123123132112213');
    },5000);
})
app.listen(3000);