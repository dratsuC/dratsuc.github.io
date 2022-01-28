'use strict';

// object for storing tasks
const taskManager = new TaskManager(0);



/* -----------------------------
// 	DATE DISPLAY FUNCTION	//
----------------------------- */ 

// defining current date, 
// and appending it to '#date' HTML element

let d = new Date().toLocaleDateString('en-us', { 
	weekday:"long", year:"numeric", month:"short", day:"numeric"});

// defining current date in format
// appropriate for 
let todaysDate = new Date(Date.now())
.toLocaleString()
.split(",")[0]
.split("/");




let getDate = () => {
	try {
		let displayD = document.querySelector("#date");
		displayD.innerHTML = `Welcome! Today is ${d}.`;			
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
let editInvalidCounter = 0;

// submit buttons for each form
let addButton = document.querySelector('#addSubmit');


// variable to store each form
let addTaskForm = document.querySelector('#addTask');


// grabbing add task inputs 
const addName = document.querySelector('#addName');
const addDescription = document.querySelector('#addDescription');
const addAssignedTo = document.querySelector('#addAssignedTo')
const addStatus = document.querySelector('#addStatus');
const addDate = document.querySelector('#addDate');
/////////////////////////////////////////////	



/////////////////////////////////////////////
// FUNCTION FOR CLEARING HTML CLASSES //
/////////////////////////////////////////////
let clearForms = () => {
	addName.value = '';
	addDescription.value = '';
	addAssignedTo.value = '';
	addStatus.value = '';
	addDate.value = '';
	// need to add in classes to initialise

}





/////////////////////////////////////////////
// VALIDATION FOR 'ADD NEW FORM' MODAL WINDOW//
/////////////////////////////////////////////
addButton.addEventListener('click', (event) => {

	try {

		invalidCounter = 0;

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



		if (
			addDateArray[0] >= todaysDate[2] &&
			parseInt(addDateArray[1]) >= todaysDate[0] && 
			parseInt(addDateArray[2]) >= todaysDate[1] 
		) {
			dateCounter = 0;	
		}
		 else {
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
		console.log(invalidCounter)
		console.log(addDateArray)
		console.log(todaysDate)

		// evaluate invalidCounter to check for 
		// invalid inputs
		if (invalidCounter === 0) {
			// Pass form inputs to object
			// addTask method
			taskManager.addTask(
				addName.value,
				addDescription.value,
				addAssignedTo.value,
				addStatus.value,
				addDate.value)



			// clear inputs ready for next
			// task creation
			addTaskForm.reset()	
			taskManager.render()


		} else {
			event.preventDefault();
		}


	} catch(error) {
		console.log('Something went wrong. Please read.')
		console.log(error)
	}
})

