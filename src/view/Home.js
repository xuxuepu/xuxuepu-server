var config = require('./../util/config');

module.exports = function( app ){
    app.get(config.requestApi + '/home', function(req, res){
        var json = {
            code: 0,
            data: {
                msg: "专业写500几十年，经历过500的接口才是最健壮的接口。",
                author: "epo",
                create_date: "2017-09-30"
            }
        };
        res.send(json);
    });
};