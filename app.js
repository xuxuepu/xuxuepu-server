var express = require('express');
var bodyParser = require("body-parser");

var Home = require('./src/view/Home');
var User = require('./src/view/User');
var app = express();

app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({ extended: false })); //此项必须在 bodyParser.json 下面,为参数编码

Home(app);
User(app);
app.listen(3000);