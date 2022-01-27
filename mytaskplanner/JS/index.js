'use strict';




/* -----------------------------
// 	DATE DISPLAY FUNCTION	//
----------------------------- */ 

// defining current date, 
// and appending it to '#date' HTML element
let plainDate = [];
let compareDate;
plainDate = new Date()


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



/* ------------------------------/
// 	FORM VALIDATION FUNCTION	//
/----------------------------- */ 

// counter for checking if any invalid inputs were given
let invalidCounter = 0;

// submit buttons for each form
let addButton = document.querySelector('#addSubmit');
let editButton = document.querySelector('#editSubmit');

// variable to store each form
let addTaskForm = document.querySelector('#addTask');
let editTaskForm = document.querySelector('#editTask');

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

const addDate = document.querySelector('#addDate');
// let addDateArray = addDate.value.split('-');
// console.log(addDateArray)
/////////////////////////////////////////////	

// grabbing edit task inputs
const editName = document.querySelector('#editName');
const editDescription = document.querySelector('#editDescription');
const editAssignedTo = document.querySelector('#editAssignedTo')
const editStatus = document.querySelector('#editStatus');

const editDate = document.querySelector('#editDate');
// let editDateArray = editDate.value.split('-');
/////////////////////////////////////////////

// let validator = () => {
// 	if (addName.value.length >= 5) {
// 	addName.classList.add('is-valid')
// 	}
// }


let newModal = () => {
	invalidCounter = 0;

}

/////////////////////////////////////////////
// VALIDATION FOR 'ADD NEW FORM' MODAL WINDOW//
/////////////////////////////////////////////
addButton.addEventListener('click', () => {

	try {

		if (addName.value.length >= 5) {
			addName.classList.add('is-valid');
			addName.classList.remove('is-invalid');
		} else {
			addName.classList.remove('is-valid');
			addName.classList.add('is-invalid');
			invalidCounter++
		}
		if (addDescription.value.length >= 5) {
			addDescription.classList.add('is-valid');
			addDescription.classList.remove('is-invalid');
		} else {
			addDescription.classList.remove('is-valid');
			addDescription.classList.add('is-invalid');
			invalidCounter++
		}
		if (addAssignedTo.value.length >= 5) {
			addAssignedTo.classList.add('is-valid');
			addAssignedTo.classList.remove('is-invalid');
		} else {
			addAssignedTo.classList.remove('is-valid');
			addAssignedTo.classList.add('is-invalid');
			invalidCounter++
		}
		if (addStatus.value) {
			addStatus.classList.add('is-valid');
			addStatus.classList.remove('is-invalid');
		} else {
			addStatus.classList.remove('is-valid');
			addStatus.classList.add('is-invalid');
			invalidCounter++
		}

		// DATE LOGIC
		let dateCounter = 0;
		let addDateArray = addDate.value.split('-');

		if (addDateArray[0] >= plainDate.getFullYear()){
			if (addDateArray[1] >= plainDate.getMonth() + 1) {
				if (addDateArray[2] >= plainDate.getDate()) {
					dateCounter = 0;
				} 
			} 
		} else {
			dateCounter++
		}

			//if the counter is empty, the user 
			// inputted a good date		
		if (!dateCounter) {
			addDate.classList.add('is-valid');
			addDate.classList.remove('is-invalid');
		} else {
			addDate.classList.remove('is-valid');
			addDate.classList.add('is-invalid');
			invalidCounter++
		}
		//end of date logic


		// evaluate invalidCounter to check for 
		// invalid inputs
		if (invalidCounter > 0) {
			addButton.preventDefault;
		} else {

			// pass on to function which handles
			// actual form submission/task creation
		}

	} catch(error) {
		console.log('Something went wrong. Please read.')
		console.log(error)
	}
})





/* -----------------------------
// 	FORM SUBMISSION FUNCTION/S	//
----------------------------- */ 

// creating new object from taskManager, 
// which will hold all created tasks
let taskObj = new taskManager();


// function for assigning values from input form
// into their appropriate places inside HTML cards
// -- not sure how it works yet lmao
let taskMapper = () => {
	document.createElement()
}





// FUNCTION CALLING //





// validateAddForm()