var base = require('./base');

module.exports = {
    /**
     * 新增用户信息
     */
    addUserInfo: function(data, backcall){
        var keys = '(', values = '(';
        for(var item in data){
            if(item != 'id' && item != 'update_date' && item != 'create_date'){
                keys += item + ', ';
                values += "'" + data[item] + "'" + ', ';
            }
        }
        keys += ')';
        values += ')';
        keys = keys.replace(', )', ')');
        values = values.replace(', )', ')');

        var sql = 'INSERT INTO user '+ keys +' VALUES ' + values;
        base.execute(sql, function(results){
            typeof backcall == "function" && backcall(results);
        });
    },
    /**
     * 获取用户信息列表
     */
    getUserList: function(data, backcall){
        var sql = 'SELECT * FROM user';
        base.execute(sql, function(results){
            typeof backcall == "function" && backcall(results);
        });
    }
};