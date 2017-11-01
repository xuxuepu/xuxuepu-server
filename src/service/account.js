var base = require('./base');
var md5 = require('md5');

module.exports = {
    /**
     * 登录
     */
    login: function(data, callback){
        if(data.phone && data.password){
            var password = md5(md5(data.password));//前端加密一次，后端再加密两次
            var sql = 'SELECT id, phone, username, nickname FROM xxp_user WHERE phone="' + data.phone +'" and password="'+ password + '"';
            base.execute(sql, function(results){
                results = results.length > 0 ? results[0] : {};
                if(results.id){                
                    var resData = base.resAssembleData(0, results, null);
                    typeof callback == "function" && callback(resData);
                }else{
                    var resData = base.resAssembleData(100, null, '手机号或密码不匹配');
                    typeof callback == "function" && callback(resData);
                }
            });
        }else{
            var resData = base.resAssembleData(100, null, '手机号或密码不能为空');
            typeof callback == "function" && callback(resData);
        }
    }
};