const Home = (app)=>{
    app.get('/', function(req, res){
        var json = {data:'index'};
        res.send(json);
    });
};
export default Home;