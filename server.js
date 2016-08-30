/**
 * Created by 胖墩 on 2016/8/30.
 */
var $ = require('jquery');
var _ = require('underscore');
var vm = require('vm');
var fs = require('fs');
var journey = require('journey');
var async = require('async');
var dbutil = require('./dbutil');

String.prototype.replaceAll = function(s1, s2) {
    var demo = this
    while (demo.indexOf(s1) != - 1)
        demo = demo.replace(s1, s2);
    return demo;
}
// Create a Router
var router = new(journey.Router);

// Create the routing table
router.map(function() {
    // this.root.bind(function (req, res) { res.send("Welcome") });
    this.get(/HamstrerServlet\/(\w*\W*\w*)*/).bind(function(req, res, id) {
        var runJsPath = this.request.url.pathname.replaceAll("/HamstrerServlet", "") + ".js";
        console.log("执行的脚本文件:" + runJsPath);

        //传入的绑定变量
        var sandbox = {
            req: req,
            res: res,
            $: $,
            dbutil: dbutil,
            async: async,
            console: console
        };

        fs.readFile('./HamstrerServlet' + runJsPath, function(err, data) {
            vm.runInNewContext(data, sandbox, 'myfile.vm');
        });

    });
    this.post('/^HamstrerServlet\/(\w*)$/)').bind(function(req, res, data) {
        res.send(200);
    });
});

require('http').createServer(function(request, response) {
    var body = "";

    request.addListener('data', function(chunk) {
        body += chunk
    });
    request.addListener('end', function() {
        router.handle(request, body, function(result) {
            response.writeHead(result.status, result.headers);
            response.end(result.body);
        });
    });
}).listen(8080);