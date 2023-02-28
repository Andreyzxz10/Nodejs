const Time=require('./date.js');
const http=require('http');


http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`La Hora es: ${Time.date()}`);
    res.end(' Andrey Benitez');
}).listen(8080);    