var base = require('./base');

module.exports = {
    /**
     * 新增用户信息
     */
    addUserInfo: function(data, backcall){

        var resData = base.addAssembleSql(data);

        var sql = 'INSERT INTO xxp_user '+ resData.keys +' VALUES ' + resData.values;
        base.execute(sql, function(results){
            typeof backcall == "function" && backcall(results);
        });
    },
    /**
     * 获取用户信息列表
     */
    getUserList: function(data, backcall){
        var sql = 'SELECT * FROM xxp_user';
        base.execute(sql, function(results){
            var resData = base.resAssembleData(0, results, null);
            typeof backcall == "function" && backcall(resData);
        });
    }
};