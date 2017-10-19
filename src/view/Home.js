var config = require('./../util/config');

module.exports = function( app ){
    app.get(config.requestApi + '/home', function(req, res){
        var json = {
            code: 0,
            data: {
                msg: "我是首页后台数据",
                author: "epo",
                create_date: "2017-09-30"
            }
        };
        res.send(json);
    });
};