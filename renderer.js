var fs = require('fs');

function mergeValues(values, content){
	//Cycle over keys
	for(var key in values){
	
	//get all the stuff outta values
	content = content.replace("{{" + key + "}}", values[key]);
	}
		//replace all keys with values
	//return merged content
	return content;
}

function view(templateName, values, response) {
        //read from the template files
	var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});	
	
        //insert values into the content
	fileContents = mergeValues(values, fileContents);
	//write out the contetn to the response	
	response.write(fileContents);
}      

module.exports.view = view;
