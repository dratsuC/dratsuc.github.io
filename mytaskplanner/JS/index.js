'use strict';




/* -----------------------------
// 	DATE DISPLAY FUNCTION	//
----------------------------- */ 

// defining current date, 
// and appending it to '#date' HTML element
let d = new Date().toLocaleDateString('en-us', { 
	weekday:"long", year:"numeric", month:"short", day:"numeric"});
let getDate = () => {

	d = `Today is ${d}.`
	try {
		let displayEl = document.querySelector("#date");
		displayEl.innerHTML = d;			
	} catch(error) {
		console.log('Uh oh, something went oopsie!')
		console.log(error)
	}


}


//calling date function
getDate();



/* -----------------------------
// 	FORM VALIDATION FUNCTION	//
----------------------------- */ 

/*
name (at least 5 characters),
description (at least 5 characters),
status (must be chosen),
date (must be the current date or later)
*/

// grabbing add task inputs 
const addName = document.querySelector('#addName');
const addDescription = document.querySelector('#addDescription');
const addAssignedTo = document.querySelector('#addAssignedTo')
const addStatus = document.querySelector('#addStatus');
const addDate = document.querySelector('#addDate')
/////////////////////////////////////////////

// grabbing edit task inputs
const editName = document.querySelector('#editName');
const editDescription = document.querySelector('#editDescription');
const editAssignedTo = document.querySelector('#editAssignedTo')
const editStatus = document.querySelector('#editStatus');
const editDate = document.querySelector('#editDate')
/////////////////////////////////////////////

// let validator = () => {
// 	if (addName.value.length >= 5) {
// 	addName.classList.add('is-valid')
// 	}
// }


let validateAddForm = () => {

	try {
		if (addName.value >= 5) {
			addName.classList.add('is-valid');
			addName.classList.remove('is-invalid');
		} else {
			addName.classList.remove('is-valid');
			addName.classList.add('is-invalid');
		}
		if (addDescription.value >= 5) {
			addDescription.classList.add('is-valid');
			addDescription.classList.remove('is-invalid');
		} else {
			addDescription.classList.remove('is-valid');
			addDescription.classList.add('is-invalid');
		}
		if (addAssignedTo.value >= 5) {
			addAssignedTo.classList.add('is-valid');
			addAssignedTo.classList.remove('is-invalid');
		} else {
			addAssignedTo.classList.remove('is-valid');
			addAssignedTo.classList.add('is-invalid');
		}
		if (addStatus.value) {
			addStatus.classList.add('is-valid');
			addStatus.classList.remove('is-invalid');
		} else {
			addStatus.classList.remove('is-valid');
			addStatus.classList.add('is-invalid');
		}
		if (addDate.value < d) {
			addDate.classList.add('is-valid');
			addDate.classList.remove('is-invalid');
		} else {
			addDate.classList.remove('is-valid');
			addDate.classList.add('is-invalid');
		}

	} catch(error) {
		console.log('Something went wrong. Please try again.')
		console.log(error)
	}
}





/* -----------------------------
// 	FORM SUBMISSION FUNCTION/S	//
----------------------------- */ 

// creating new object from taskManager, 
// which will hold all created tasks
let taskObj = new taskManager();

// counter for checking if any invalid inputs were given?
let invalidCounter = 0;

let addButton = document.querySelector('#addSubmit');
let editButton = document.querySelector('#editSubmit');

//TEST TASK
taskObj.addTask('task', 'do balls', 'jeff', 'now', 'todo')
console.log(taskObj.tasks)


// function for assigning values from input form
// into their appropriate places inside HTML cards
// -- not sure how it works yet lmao
let taskMapper = () => {
	document.createElement()
}






let tryAddForm = () => {
	if (invalidCounter == 0) {
		try {
			



		} catch(error) {
			console.log(error)
		}
	} else {
		return //?????????????
	}
}


// let submitForm = () => {
// let submitButton = document.querySelector('#submit-button')
// submitButton.addEventListener('click', document.querySelector('#addTask').submit())




addButton.addEventListener('click', validateAddForm())


// FUNCTION CALLING //

// validateAddForm()
