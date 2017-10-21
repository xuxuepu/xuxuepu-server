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
    },
    /**
     * 获取文章信息
     */
    getEssayDetail: function(data, callback){
        if(data.id){
            var sql = 'SELECT id, author, title, content, date_format(create_date, "%Y-%m-%d %H:%i:%s") as create_date FROM xxp_essay WHERE id=' + data.id;
            base.execute(sql, function(results){
                results = results.length > 0 ? results[0] : {};
                var resData = base.resAssembleData(0, results, null);
                typeof callback == "function" && callback(resData);
            });
        }else{
            var resData = base.resAssembleData(100, null, 'id不能为空');
            typeof callback == "function" && callback(resData);
        }
    }
};