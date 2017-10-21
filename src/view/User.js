var config = require('./../util/config');
var user = require('./../service/user');

module.exports = function( app ){

    //新建用户信息
    app.post(config.requestApi + '/user/add', function(req, res){
        user.addUserInfo({
            phone: req.body.phone,
            user_name: req.body.user_name,
            password: req.body.password
        }, function(results){
            res.send(results);
        });
    });

    //获取用户列表
    app.get(config.requestApi + '/user/list', function(req, res){
        user.getUserList(null, function(results){
            res.send(results);
        });
    });

    //获取用户列表
    app.get(config.requestApi + '/user/info', function(req, res){
        user.getUserInfo({
            id : req.query.id
        }, function(results){
            res.send(results);
        });
    });
};