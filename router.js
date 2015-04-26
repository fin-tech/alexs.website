var renderer = require('./renderer.js');

//home Route handling
function home(request, response){
        if(request.url ==="/"){
        response.writeHead(200, {'Content-Type': 'text/html'});
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
		
		response.writeHead(200, {'Content-Type': 'text/html'});
        	//response.write(searchRequest+ "\n");
        	var values={ search : searchRequest }	
		renderer.view("header", {}, response);
        	renderer.view("search", values, response);
        	renderer.view("footer", {}, response);
        	response.end();
	}
}

module.exports.home    = home;
module.exports.page    = page;

