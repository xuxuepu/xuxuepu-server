var config = require('./../util/config');
var resume = require('./../service/resume');

module.exports = function( app ){
    //获取简历详情
    app.get(config.requestApi + '/resume/detail', function(req, res){
        resume.getResumeDetail({
            id : req.query.id
        }, function(results){
            res.send(results);
        });
    });
    //通过user_id查找简历的授权码
    app.get(config.requestApi + '/resume/authorizationcode_by_userid', function(req, res){
        resume.getAuthorizationCodeByUserId({
            user_id : req.query.user_id,
            authorization_code: req.query.authorization_code
        }, function(results){
            if(results.data.authorization_code){
                req.session['isAuthorizationResume'] = true;//写session可授权读取简历
                res.send({
                    code: 0,
                    data: null,
                    message: '授权成功'
                });
            }else{
                res.send({
                    code: 100,
                    data: null,
                    message: '授权码不正确'
                });
            }
        });
    });
    //是否可读简历
    app.get(config.requestApi + '/resume/is_authorization_resume', function(req, res){
        var iar = req.session['isAuthorizationResume'];//写session可授权读取简历
        if(iar){
            res.send({
                code: 0,
                data: null,
                message: '授权成功'
            });
        }else{
            res.send({
                code: 100,
                data: null,
                message: '授权失败'
            });
        }
    });
};