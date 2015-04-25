//router
var router = require("./router.js");

//web server
var http = require("http");

http.createServer(function(request,response){
	router.home(request, response);
	router.page(request, response);
}).listen(1337, "0.0.0.0");
console.log('Alexs.Website - insert random quote here');



