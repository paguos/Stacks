var cards = [];
var stacks = [];
var course = {};
var stackIndex = 0;

var currentCardIndex = -1;

function getCourse(index){
	return coursesJSON[index];
}

function getStack(index){
	return course.stacks[index];
}

function getCards(){
	return copyArray(stacks.cards);
}

function init(){
	initNav();
	selectByHash();
}

function initNav(){
	//Init NavBar
	var navBarList = document.querySelector("#coursesNav");
	var courses = getCoursesNames();
	courses.forEach(function(course, i){
		var a = document.createElement("a");
		a.textContent = course;
		a.setAttribute("href","#");
		var li = document.createElement("li");
		li.appendChild(a);
		li.addEventListener("click", function() { selectCourse(i);});
		navBarList.appendChild(li);
	});
}

function selectCourse(index){
	course = getCourse(index);
	displayCourse();
	initPagination();
	selectStack(0);
	displayActiveCourse(index);
	
}

function selectByHash(){
	var hash = location.hash.toLowerCase();
	var names = getCoursesNames();
	var index = 0;

	for (var i = 0; i < names.length; i++) {
		//console.log(names[i].toLowerCase());
		if(hash === "#" + names[i].toLowerCase()){
			index = i;
		}
	}

	selectCourse(index);

}

function displayActiveCourse(index){
	var navBarList = document.querySelector("#coursesNav");
	var navs = navBarList.childNodes;
	for (var i = 1; i < navs.length; i++) {
		var nav = navs[i];
		if(index === i-1){
			nav.className = "active";
		}else{
			nav.className = "";
		}
	}
}

function displayCourse(){
	var h1 = document.querySelector("#coursetitle");
	h1.textContent = course.name;
}

function selectStack(index){
	stacks = getStack(index);
	cards = getCards();
	stackIndex = index;
	currentCardIndex = chooseCardIndex(-1);
	displayStack();
	displayCard();
	displayRem();
	makeActivePage(index);
	reset();
}

function makeActivePage(index){
	var ul = document.querySelector("#pages");
	var pages = ul.childNodes;
	index++;

	pages.forEach(function(page, i){
		if(index == i){
			page.className = "active";
		}else{
			page.className = "";
		}
	});

}

function displayStack(){
	var h2 = document.querySelector("#stacktitle");
	h2.textContent = stackIndex + 1 + ". " + stacks.title;
}

function displayCard(){
	var h2 = document.querySelector("#card");
	h2.textContent = cards[currentCardIndex];
}

function displayRem(){
	var p = document.querySelector("p");
	p.textContent = "Remaining: " + cards.length;
}

function getCoursesNames(){
	var courses = [];
	for(var i = 0; i < coursesJSON.length; i++){
		var name = coursesJSON[i].name;
		var shortName = coursesJSON[i].shortName;
		courses.push(shortName);		
	}
	return courses;
}

function chooseCardIndex(oldIndex){
	var index = Math.floor(Math.random() * cards.length);
	while(oldIndex === index && cards.length > 1){
		index = Math.floor(Math.random() * cards.length);
	}
	return index;
} 

//Writes an input in the log
function log(input){
	var logList = document.getElementById("logList");
	var listItem = document.createElement("li");
	listItem.innerHTML = input;
	logList.appendChild(listItem);
}

function reset(){
	cards = getCards();
	currentCardIndex = chooseCardIndex(-1);
	displayCard();
	displayRem();
	var logList = document.getElementById("logList");
	removeChildNodes(logList);
}

function answerRight(){
	if(cards.length > 0){
		log("RIGHT: " + cards[currentCardIndex]);
		cards.splice(currentCardIndex,1);
		currentCardIndex = chooseCardIndex(currentCardIndex);
		displayCard();
		displayRem();
	}
}

function answerWrong(){
	if(cards.length >0){
		log("WRONG: " + cards[currentCardIndex]);
		currentCardIndex = chooseCardIndex(currentCardIndex);
		displayCard();
		displayRem();
	}	
}

function copyArray(arry){
	var newArry = [];
	for (var i = 0; i < arry.length; i++) {
		newArry.push(arry[i]);
	}
	return newArry;
}

function initPagination(){
	var ul = document.querySelector("#pages");

	removeChildNodes(ul);

	// Prev Page
	var prev = createPageNav("&laquo;");
	prev.addEventListener("click", function() { 
		if(stackIndex !== 0){
			selectStack(stackIndex - 1);
		}});
	ul.appendChild(prev);


	var pages = [];

	// #Pages
	var numberOfStacks = course.stacks.length;
	for (var i = 0; i < numberOfStacks; i++) {
		var li = createPageNav(i + 1 + "");
		if(pages.length < 15)
			pages.push(li);
	}

	pages.forEach(function(page,i){
		page.addEventListener("click", function() {selectStack(i)});
		ul.appendChild(page);
	});

	// Next Page
	var next = createPageNav("&raquo;");
	next.addEventListener("click", function() { 
		if(stackIndex !== getCoursesNames.length + 1){
			selectStack(stackIndex + 1);
		}});
	ul.appendChild(next);
}

function removeChildNodes(myNode){
	while (myNode.firstChild) {
    	myNode.removeChild(myNode.firstChild);
	}

}

function createPageNav(content){
	var li = document.createElement("li");
	var a = document.createElement("a");
	a.innerHTML = content;
	a.setAttribute("href","#");
	li.appendChild(a);
	return li;
}

//Add Key Listeners:
var field = document.querySelector("body");
field.addEventListener("keydown", function(event) {
	if (event.keyCode == "C".charCodeAt(0)){
    	answerRight();
    }else if(event.keyCode == "X".charCodeAt(0)){
    	answerWrong();
    }else if(event.keyCode == "Z".charCodeAt(0)){
    	reset();
    }
});

init();