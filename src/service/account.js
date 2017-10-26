var base = require('./base');

module.exports = {
    /**
     * 登录
     */
    login: function(data, callback){
        if(data.phone && data.password){
            var sql = 'SELECT id, phone, username, nickname FROM xxp_user WHERE phone="' + data.phone +'" and password="'+ data.password + '"';
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