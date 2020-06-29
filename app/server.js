var http = require("http");

http.createServer(function (req, res) {
    if(req.url != "/favicon.ico"){
        console.log(req.url);

        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.write('Hello Word from Node JS Server \n');
        res.write('youre Request :'+req.url);
        res.end();
    }
}).listen(8888);

//localhost:8888/home

console.log("Server is Running......")