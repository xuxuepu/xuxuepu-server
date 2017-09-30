var express = require('express');
var Home = require('./src/view/Home');
var User = require('./src/view/User');
var app = express();
Home(app);
User(app);
app.listen(3000);