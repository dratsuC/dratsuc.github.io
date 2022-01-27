'use strict';




/* -----------------------------
// 	DATE DISPLAY FUNCTION	//
----------------------------- */ 

// defining current date, 
// and appending it to '#date' HTML element

let getDate = () => {

	let d = new Date().toLocaleDateString('en-us', { 
		weekday:"long", year:"numeric", month:"short", day:"numeric"});
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


const addName = document.querySelector('#addName');
const addDesc = document.querySelector('#Description');
const addStatus = document.querySelector('#Status');
const addDate = document.querySelector('#Date')



if (addName.value.length >= 5) {
	document.querySelector()
}




//TEST//
let validateInput = (input) => {
	if (input.value) {
		input.classList.add('is-valid');
	}
}



/* -----------------------------
// 	FORM SUBMISSION FUNCTION/S	//
----------------------------- */ 


validateInput(addName)


// let submitForm = () => {
// let submitButton = document.querySelector('#submit-button')
// submitButton.addEventListener('click', document.querySelector('#addTask').submit())


let test = new taskManager()
test.addTask('task', 'do balls', 'jeff', 'now', 'todo')
console.log(test.tasks)



