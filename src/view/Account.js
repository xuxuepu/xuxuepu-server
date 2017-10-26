var config = require('./../util/config');
var account = require('./../service/account');

module.exports = function( app ){
    //判断是否登录
    app.get(config.requestApi + '/account/is_login', function(req, res){
        var manageLogin = req.session['manageLoginSession'];//是否有登录session
        if(manageLogin && manageLogin.id){
            res.send({
                code: 0,
                data: manageLogin,
                message: null
            });
        }else{
            res.send({
                code: 200,
                data: null,
                message: '未登录'
            });
        }
    });

    //登录
    app.post(config.requestApi + '/account/login', function(req, res){
        req.session['manageLoginSession'] = {};
        account.login({
            phone: req.body.phone,
            password: req.body.password
        }, function(results){
            if(!results.code){
                req.session['manageLoginSession'] = results.data;//写session
                res.send(results);
            }else{
                res.send(results);
            }
        });

    });

    //登出
    app.get(config.requestApi + '/account/logout', function(req, res){
        req.session['manageLoginSession'] = {};
        res.send({
            code: 0,
            data: null,
            message: '登出成功'
        });
    });
};