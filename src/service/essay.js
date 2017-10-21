var base = require('./base');

module.exports = {
    /**
     * 新增文章信息
     */
    addEssayInfo: function(data, callback){
        
        var resData = base.addAssembleSql(data);

        var sql = 'INSERT INTO xxp_essay '+ resData.keys +' VALUES ' + resData.values;
        base.execute(sql, function(results){
            typeof callback == "function" && callback(results);
        });
    },
    /**
     * 获取文章信息列表
     */
    getEssayList: function(data, callback){
        var sql = 'SELECT * FROM xxp_essay';
        base.execute(sql, function(results){
            var resData = base.resAssembleData(0, results, null);
            typeof callback == "function" && callback(resData);
        });
    }
};