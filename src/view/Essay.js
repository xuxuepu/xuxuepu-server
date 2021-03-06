var config = require('./../util/config');
var essay = require('./../service/essay');

module.exports = function( app ){

    //新建文章信息
    app.post(config.requestApi + '/essay/add', function(req, res){
        essay.addEssayInfo({
            author: req.body.author,
            title: req.body.title,
            description: req.body.description,
            content: req.body.content
        }, function(results){
            res.send(results);
        });
    });

    //修改文章信息
    app.post(config.requestApi + '/essay/edit', function(req, res){
        essay.editEssayInfo({
            id: req.body.id,
            author: req.body.author,
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

    //获取文章详情
    app.get(config.requestApi + '/essay/detail', function(req, res){
        essay.getEssayDetail({
            id : req.query.id
        }, function(results){
            res.send(results);
        });
    });
};