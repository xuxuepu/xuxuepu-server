module.exports = function( app ){
    app.get('/user', function(req, res){
        var json = {data:'user'};
        res.send(json);
    });
};