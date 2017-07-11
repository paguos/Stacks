var currentCardsSet = [];
var currentStack = [];
var currentCourse = {};

var currentCourseIndex = 0;
var currentStackIndex = 0;
var currentCardIndex = -1; 

function getCourse(index) {
	return coursesJSON[index];
}

function getStack(index) {
	return currentCourse.stacks[index];
}

function getCards() {
	return tools.copyArray(currentStack.cards);
}

function init() {
	initNav();
	addKeyListeners();

	//Load Cookies:
	var course_index = 0;
	var course_cookie = tools.getCookie("stacks_course");
	if (course_cookie !== "") {
		course_index = parseInt(course_cookie);
	}

	var stack_index = 0;
	var stack_cookie = tools.getCookie("stacks_stack");
	if (stack_cookie !== "") {
		stack_index = parseInt(stack_cookie);
	}

	selectByHash(course_index, stack_index);
}

//Init NavBar:
function initNav() {
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

//Adds key listerners:
function addKeyListeners() {
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
}

// Init the pagination bar
function initPagination(page_nr = 1) {

	// #Pages
	var numberOfStacks = currentCourse.stacks.length;

	$('#show_paginator').bootpag({
		total: numberOfStacks,
		maxVisible: 5,
		page: page_nr

	}).on('page', function (event, num) {
		selectStack(num - 1);
	});
}

// Initial select of course and stack:
function selectByHash(course_index = 0, stack_index = 0) {
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

// Selects a course and displays it
function selectCourse(index) {
	currentCourse = getCourse(index);
	currentCourseIndex = index;
	displayCourse();
	displayActiveCourse(index);
	selectStack(0);
	tools.setCookie("stacks_course", "" + index, 10);
}

// Selects a stack and displays it
function selectStack(index) {
	currentStack = getStack(index);
	currentCardsSet = getCards();
	currentStackIndex = index;
	currentCardIndex = chooseCardIndex(-1);
	displayStack();
	displayCard();
	displayRem();
	reset();
	loadModalCards();
	initPagination(index + 1);
	tools.setCookie("stacks_stack", "" + index, 10);
}

// Refresh content of the modal panel:
function loadModalCards() {
	var modalList = document.getElementById("modal-cards-list");
	tools.removeChildNodes(modalList);
	for (var i = 0; i < currentCardsSet.length; i++) {
		var li = document.createElement("li");
		li.textContent = currentCardsSet[i];
		modalList.appendChild(li);
	}
}

// Displays active course in the navbar
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

// Displays current course content
function displayCourse() {
	var h1 = document.querySelector("#coursetitle");
	h1.textContent = currentCourse.name;
}

// Displays current stack content
function displayStack() {
	var h2 = document.querySelector("#stacktitle");
	h2.textContent = currentStackIndex + 1 + ". " + currentStack.title;
}

// Displays current card content
function displayCard() {
	var h2 = document.querySelector("#card");
	h2.textContent = currentCardsSet[currentCardIndex];
}

// Updates remaning cards
function displayRem() {
	var p = document.querySelector("p");
	p.textContent = "Remaining: " + currentCardsSet.length;
}

// Returns a list of all the curses names of the JSON file
function getCoursesNames() {
	var courses = [];
	for (var i = 0; i < coursesJSON.length; i++) {
		var name = coursesJSON[i].name;
		var shortName = coursesJSON[i].shortName;
		courses.push(shortName);
	}
	return courses;
}

//Writes an input in the log
function log(input, tag = "") {
	var logList = document.getElementById("logList");
	var listItem = document.createElement("li");
	
	var span = document.createElement("span");
	span.className = tag;
	span.textContent = tag.toUpperCase() + ": ";
	
	listItem.innerHTML = span.outerHTML + input;
	logList.appendChild(listItem);
}

// ## STACK ACTIONS ##

// Reset the current stack
function reset() {
	currentCardsSet = getCards();
	currentCardIndex = chooseCardIndex(-1);
	displayCard();
	displayRem();
	var logList = document.getElementById("logList");
	tools.removeChildNodes(logList);
}

function answerWrong() {
	if (currentCardsSet.length > 0) {
		log(currentCardsSet[currentCardIndex], "WRONG");
		currentCardIndex = chooseCardIndex(currentCardIndex);
		displayCard();
		displayRem();
	}
}

function answerRight() {
	if (currentCardsSet.length > 0) {
		log(currentCardsSet[currentCardIndex],"RIGHT");
		currentCardsSet.splice(currentCardIndex, 1);
		currentCardIndex = chooseCardIndex(currentCardIndex);
		displayCard();
		displayRem();
	}
}

// Returns a random index for the next card
function chooseCardIndex(oldIndex) {
	var index = Math.floor(Math.random() * currentCardsSet.length);
	while (oldIndex === index && currentCardsSet.length > 1) {
		index = Math.floor(Math.random() * currentCardsSet.length);
	}
	return index;
}

init();