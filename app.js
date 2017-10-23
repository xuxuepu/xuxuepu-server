var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");

var view = require('./src/view');
var app = express();

app.use(cookieParser());
app.use(session({
    secret: '12345',
    name: 'xuxuepuapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 3600000},  //设置maxAge是3600000ms，即1小时s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
}));

app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({ extended: false })); //此项必须在 bodyParser.json 下面,为参数编码

for(var item in view){
    view[item](app);
}
app.listen(3000);