var config = require('./../util/config');
var mysql = require('mysql');

module.exports = {
    /**
     * 请求数据库
     */
    execute: function (sql, callback) {
        var connection = mysql.createConnection(config.sqlConfig);

        connection.connect();

        connection.query(sql, function (error, results, fields) {
            if (error) throw error;
            var json;
            if (results) {  
                //console.log(results);  
                //将RowDataPacket对象装化成json字符串  
                var string=JSON.stringify(results);
                //将json字符串转化成json数组  
                json = JSON.parse(string);
            }
            typeof callback == "function" && callback(json);
        });
        connection.end();
    },
    /**
     * 插入语句组装数据
     */
    addAssembleSql(data){
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
        return {
          keys: keys,
          values: values  
        };
    },
    /**
     * 查询语句组装查询数据
     */
    queryAssembleSql(data){
        for(var item in data){
            if(item != 'id' && item != 'update_date' && item != 'create_date'){
                keys += item + ', ';
                values += "'" + data[item] + "'" + ', ';
            }
        }
    },
    /**
     * 组装返回数据
     */
    resAssembleData(code, data, message){
        console.log(code, data, message);
        return {
            code: code,
            data: data,
            message: message
        };
    }
};