var coursesJSON = [];

function addCourse(title, shortName, stacks){
	coursesJSON.push({"id" : coursesJSON.lenght - 1, "name": title, "shortName" : shortName, "stacks" : stacks});
}

