var cards = [];
var stacks = [];
var course = {};
var stackIndex = 0;

var currentCardIndex = -1;

function getCourse(index) {
	return coursesJSON[index];
}

function getStack(index) {
	return course.stacks[index];
}

function getCards() {
	return copyArray(stacks.cards);
}

function init() {
	initNav();

	//Load Cookies:
	var course_index = 0;
	var course_cookie = getCookie("stacks_course"); 
	if(course_cookie !== ""){
		index = parseInt(course_cookie);
	}  
	var stack_index = 0;
	var stack_cookie = getCookie("stacks_stack");
	if(stack_cookie !== ""){
		stack_index = parseInt(stack_cookie);
		
	}

	selectByHash(course_index, stack_index);
}

function initNav() {
	//Init NavBar
	var navBarList = document.querySelector("#coursesNav");
	var courses = getCoursesNames();
	courses.forEach(function (course, i) {
		var a = document.createElement("a");
		a.textContent = course;
		a.setAttribute("href", "#");
		var li = document.createElement("li");
		li.appendChild(a);
		li.addEventListener("click", function () { selectCourse(i); });
		navBarList.appendChild(li);
	});
}

function selectByHash(course_index=0,stack_index =0) {
	var hash = location.hash.toLowerCase();
	var names = getCoursesNames();
	var index = course_index;

	for (var i = 0; i < names.length; i++) {
		if (hash === "#" + names[i].toLowerCase()) {
			index = i;
		}
	}

	selectCourse(index);
	selectStack(stack_index);
}

function selectCourse(index) {
	course = getCourse(index);
	displayCourse();
	initPagination();
	displayActiveCourse(index);
	selectStack(0);
	setCookie("stacks_course",""+ index, 10);
}

function selectStack(index) {
	stacks = getStack(index);
	cards = getCards();
	stackIndex = index;
	currentCardIndex = chooseCardIndex(-1);
	displayStack();
	displayCard();
	displayRem();
	reset();
	loadModalCards();
	initPagination(index+1);
	setCookie("stacks_stack",""+ index, 10);
}

function displayActiveCourse(index) {
	var navBarList = document.querySelector("#coursesNav");
	var navs = navBarList.childNodes;
	for (var i = 1; i < navs.length; i++) {
		var nav = navs[i];
		if (index === i - 1) {
			nav.className = "active";
		} else {
			nav.className = "";
		}
	}
}

function displayCourse() {
	var h1 = document.querySelector("#coursetitle");
	h1.textContent = course.name;
}

function displayStack() {
	var h2 = document.querySelector("#stacktitle");
	h2.textContent = stackIndex + 1 + ". " + stacks.title;
}

function displayCard() {
	var h2 = document.querySelector("#card");
	h2.textContent = cards[currentCardIndex];
}

function displayRem() {
	var p = document.querySelector("p");
	p.textContent = "Remaining: " + cards.length;
}

function getCoursesNames() {
	var courses = [];
	for (var i = 0; i < coursesJSON.length; i++) {
		var name = coursesJSON[i].name;
		var shortName = coursesJSON[i].shortName;
		courses.push(shortName);
	}
	return courses;
}

function chooseCardIndex(oldIndex) {
	var index = Math.floor(Math.random() * cards.length);
	while (oldIndex === index && cards.length > 1) {
		index = Math.floor(Math.random() * cards.length);
	}
	return index;
}

//Writes an input in the log
function log(input) {
	var logList = document.getElementById("logList");
	var listItem = document.createElement("li");
	listItem.innerHTML = input;
	logList.appendChild(listItem);
}

function reset() {
	cards = getCards();
	currentCardIndex = chooseCardIndex(-1);
	displayCard();
	displayRem();
	var logList = document.getElementById("logList");
	removeChildNodes(logList);
}

function answerRight() {
	if (cards.length > 0) {
		log("RIGHT: " + cards[currentCardIndex]);
		cards.splice(currentCardIndex, 1);
		currentCardIndex = chooseCardIndex(currentCardIndex);
		displayCard();
		displayRem();
	}
}

function answerWrong() {
	if (cards.length > 0) {
		log("WRONG: " + cards[currentCardIndex]);
		currentCardIndex = chooseCardIndex(currentCardIndex);
		displayCard();
		displayRem();
	}
}

function copyArray(arry) {
	var newArry = [];
	for (var i = 0; i < arry.length; i++) {
		newArry.push(arry[i]);
	}
	return newArry;
}

function initPagination(page_nr=1) {

	// #Pages
	var numberOfStacks = course.stacks.length;

	$('#show_paginator').bootpag({
		total: numberOfStacks,
		maxVisible: 8,
		page: page_nr

	}).on('page', function (event, num) {
		selectStack(num - 1);
	});
}

function removeChildNodes(myNode) {
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}

}

function createPageNav(content) {
	var li = document.createElement("li");
	var a = document.createElement("a");
	a.innerHTML = content;
	a.setAttribute("href", "#");
	li.appendChild(a);
	return li;
}

//Add Key Listeners:
var field = document.querySelector("body");
field.addEventListener("keydown", function (event) {
	if (event.keyCode == "C".charCodeAt(0)) {
		answerRight();
	} else if (event.keyCode == "X".charCodeAt(0)) {
		answerWrong();
	} else if (event.keyCode == "Z".charCodeAt(0)) {
		reset();
	}
});

//Refresh List of Questions:
function loadModalCards() {
	var modalList = document.getElementById("modal-cards-list");
	removeChildNodes(modalList);
	for (var i = 0; i < cards.length; i++) {
		var li = document.createElement("li");
		li.textContent = cards[i];
		modalList.appendChild(li);
	}
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}		

init();