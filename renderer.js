var fs = require('fs');

function mergeValues(values, content){
	//Cycle over keys
		//replace all keys with values
}

function view(templateName, values, response) {
        //read from the template files
	var fileContents = fs.readFileSync('./views/' + templateName + '.html');	

        //insert values into the content
	//fileContents = mergeValues(values, fileContents);
	//write out the contetn to the response	
	response.write(fileContents);
}      

module.exports.view = view;
