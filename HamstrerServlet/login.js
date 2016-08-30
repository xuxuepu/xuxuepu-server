/**
 * Created by 胖墩 on 2016/8/30.
 */
console.log("beigin");

//并行处理，相当于2个map最后再做一个ReReduce
async.parallel([
        function(callback){
            // 从数据库中获取当前时间
            dbutil.query("SELECT CURTIME()  AS DATE",null,function(rows,fields){
                callback(null, rows[0].DATE);
            });
        },
        function(callback){
            //随便返回一个值
            callback(null, '中文测试');
        }
    ],
    function(err, results){
        console.log(results);
        var retVal ={
            "currentTime": results[0],
            "desc": results[1]
        };
        res.sendBody(JSON.stringify(retVal));
    });
