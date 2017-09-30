module.exports = function( app ){
    app.get('/', function(req, res){
        var json = {data:'index'};
        res.send(json);
    });
};