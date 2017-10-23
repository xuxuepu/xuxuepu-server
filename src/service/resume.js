var base = require('./base');

module.exports = {
    /**
     * 获取简历信息
     */
    getResumeDetail: function(data, callback){
        if(data.id){
            var sql = 'SELECT id, user_id, content, title, content, date_format(create_date, "%Y-%m-%d %H:%i:%s") as create_date, date_format(update_date, "%Y-%m-%d %H:%i:%s") as update_date FROM xxp_resume WHERE id=' + data.id;
            base.execute(sql, function(results){
                results = results.length > 0 ? results[0] : {};
                var resData = base.resAssembleData(0, results, null);
                typeof callback == "function" && callback(resData);
            });
        }else{
            var resData = base.resAssembleData(100, null, 'id不能为空');
            typeof callback == "function" && callback(resData);
        }
    },
    /**
     * 通过user_id查找简历的授权码
     */
    getAuthorizationCodeByUserId(data, callback){
        if(data.user_id && data.authorization_code){
            var sql = 'SELECT authorization_code FROM xxp_resume WHERE user_id=' + data.user_id + ' and authorization_code='+data.authorization_code;
            base.execute(sql, function(results){
                results = results.length > 0 ? results[0] : {};
                var resData = base.resAssembleData(0, results, null);
                typeof callback == "function" && callback(resData);
            });
        }else{
            var resData = base.resAssembleData(100, null, 'user_id、authorization_code不能为空');
            typeof callback == "function" && callback(resData);
        }
    }
};