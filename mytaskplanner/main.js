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


const formName = document.querySelector('#Name');
const formDesc = document.querySelector('#Description');
const formStatus = document.querySelector('#Status');
const formDate = document.querySelector('#Date')

let validateInput = (input) => {
	if (formName.value) {
		input.classList.add('is-valid');
	}
}



/* -----------------------------
// 	FORM SUBMISSION FUNCTION/S	//
----------------------------- */ 


validateInput(formName)


// let submitForm = () => {
// 	let submitButton = document.querySelector('#submit-button')
// 	submitButton.addEventListener('click', }
