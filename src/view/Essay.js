var config = require('./../util/config');
var essay = require('./../service/essay');

module.exports = function( app ){

    //新建文章信息
    app.post(config.requestApi + '/essay/add', function(req, res){
        essay.addEssayInfo({
            title: req.body.title,
            description: req.body.description,
            content: req.body.content
        }, function(results){
            res.send(results);
        });
    });

    //获取文章列表
    app.get(config.requestApi + '/essay/list', function(req, res){
        essay.getEssayList(null, function(results){
            res.send(results);
        });
    });
};