/**
 * Created by 胖墩 on 2016/8/30.
 */
var mysql = require('mysql'); //导入mysql Module

var pool = mysql.createPool({
    host: '192.168.140.237',
    user: 'root',
    password: '123456',
    database: 'command3G'
});

//查询sql语句
function query(strSQL, param, callback) {
    pool.getConnection(function(err, connection) {
        connection.query(strSQL, param, function(err, rows, fields) {
            if (err) throw err;
            callback(rows, fields);
            connection.end();
            // connection.destroy();
        });
    });
}

exports.query = query;