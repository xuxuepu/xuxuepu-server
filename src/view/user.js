var config = require('./../util/config');
module.exports = function( app ){
    app.get(config.request_url+'/user', function(req, res){
        var json = {data:'user'};
        res.send(json);
    });
};