var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
        var kode = 0;
        var file = "";

        if(req.url == "/"){
            kode = 200;
            file = "index.html";
        }else if(req.url == '/contact'){
            // Contah
            kode = 200;
            file = "contact.html";
        }else{
            // 404 Not Foound
            kode = 404
            file = "404.html";
        }
        res.writeHead(200, {"Content-Type" : "text/html"});
        fs.createReadStream('./template/'+file).pipe(res);

}).listen(8888);

//localhost:8888/home

console.log("Server is Running......")