var renderer = require('./renderer.js');

//home Route handling
function home(request, response){
        if(request.url ==="/"){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        renderer.view("header", {}, response);
       	renderer.view("search", {}, response);
        renderer.view("footer", {}, response);
	response.end();
        }
}

//page route
function page(request, response) {
	var searchRequest = request.url.replace("/", "");
	if(searchRequest.length > 0){
	        //var hackernews = require('hacker-news');
        	//var frontPage = hackernews.news(callback);	
		
		response.writeHead(200, {'Content-Type': 'text/plain'});
        	response.write("Header\n");
        	response.write("Search\n");
        	response.write(searchRequest+ "\n");
		response.end("Footer\n");
	}
}

module.exports.home    = home;
module.exports.page    = page;

