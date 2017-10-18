var config = require('./../util/config');
var mysql = require('mysql');

module.exports = {
    execute: function (sql, backcall) {
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
            typeof backcall == "function" && backcall(json);
        });
        connection.end();
    }
};