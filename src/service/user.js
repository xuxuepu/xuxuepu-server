var base = require('./base');

module.exports = {
    /**
     * 新增用户信息
     */
    addUserInfo: function(data, callback){

        var resData = base.addAssembleSql(data);

        var sql = 'INSERT INTO xxp_user '+ resData.keys +' VALUES ' + resData.values;
        base.execute(sql, function(results){
            typeof callback == "function" && callback(results);
        });
    },
    /**
     * 获取用户信息列表
     */
    getUserList: function(data, callback){
        var sql = 'SELECT * FROM xxp_user';
        base.execute(sql, function(results){
            var resData = base.resAssembleData(0, results, null);
            typeof callback == "function" && callback(resData);
        });
    },
    /**
     * 获取用户信息
     */
    getUserInfo: function(data, callback){
        if(data.id){
            var sql = 'SELECT * FROM xxp_user WHERE id=' + data.id;
            base.execute(sql, function(results){
                var resData = base.resAssembleData(0, results, null);
                typeof callback == "function" && callback(resData);
            });
        }else{
            var resData = base.resAssembleData(100, null, 'id不能为空');
            typeof callback == "function" && callback(resData);
        }
    }
};