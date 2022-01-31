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




let displayDate = () => {
	try {
		let displayD = document.querySelector("#date");
		displayD.innerHTML = `Welcome! Today is ${d}.`;			
	} catch(error) {
		console.log('Uh oh, something went oopsie!')
		console.log(error)
	}
}


//calling date function
displayDate();


/* ------------------------------/
// 	FORM VALIDATION	//
/----------------------------- */ 


let form = document.querySelector('#addTask');



	/////////////////////////////////////////////
	// VALIDATION FOR 'ADD NEW FORM' MODAL WINDOW//
	/////////////////////////////////////////////
	form.addEventListener('submit', (event) => {

	// counter for checking if any invalid inputs were given
	let invalidCounter = 0;
	let editInvalidCounter = 0;
	// submit button
	let addButton = document.querySelector('#addSubmit');
	// grabbing add task inputs 
	const addName = document.querySelector('#addName');
	const addDescription = document.querySelector('#addDescription');
	const addAssignedTo = document.querySelector('#addAssignedTo')
	const addStatus = document.querySelector('#addStatus');
	const addDate = document.querySelector('#addDate');

	/////////////////////////////////////////////
	// FUNCTION FOR CLEARING HTML CLASSES //
	/////////////////////////////////////////////
	let clearForm = () => {
		addName.value = '';
		addDescription.value = '';
		addAssignedTo.value = '';
		addStatus.value = '';
		addDate.value = '';
		addName.classList.remove("is-valid");
	    addDescription.classList.remove("is-valid");
	    addAssignedTo.classList.remove("is-valid");
	    addStatus.classList.remove("is-valid");
	   	addDate.classList.remove("is-valid");
	}

	event.preventDefault();

	// console.log("Task Name :" + addName.value);
	// console.log("Task Description :" + addDescription.value);
	// console.log("Task Assigned To :" + addAssignedTo.value);
	// console.log("Task Due Date :" + addDate.value);
	// console.log("Task Status:" + addStatus.value);	


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

		// console.log(todaysDate)
		// console.log(addDateArray)
		
		let date = new Date(addDate.value);
		let formatted_Date = date.getDate();
		let formattedMonth = date.getMonth() + 1;
		let formattedYear = date.getFullYear();
		
		// add validations
		
		if ((formattedYear >= todaysDate[2]) && (formattedMonth === todaysDate[1])) {
			if(formatted_Date >= todaysDate[0]) {
			dateCounter = 0 
			} else {dateCounter++}
		} else if ((formattedYear >= todaysDate[2]) && (formattedMonth > todaysDate[1])) {
			dateCounter = 0
		} else {
			dateCounter++
		}
		
		console.log(formattedYear);
		console.log(formattedMonth);
		console.log(formatted_Date);
		console.log(todaysDate);
		console.log(addDate.value);
		/*if (addDateArray[2] >= todaysDate[0]) { // year
			if (parseInt(addDateArray[1]) >= todaysDate[1]) { // month
				if (parseInt(addDateArray[0]) >= todaysDate[2]) { // date
					dateCounter = 0; 
				}
			}
		} else {
			dateCounter++
		}*/

		if (addDate) // year

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
			clearForm();
			taskManager.render();


		} else {
			invalidCounter = 0;
			return;
		}


	} catch(error) {
		console.log('Something went wrong. Please read.')
		console.log(error)
	}
})

// tasks list event listener
let tasks_list = document.querySelector('#tasksList');

tasks_list.addEventListener('click', (event) => {
	if (event.target.classList === 'taskComplete') {
		const parentTask = event.target.parentElement;
		console.log(parentTask);
	}
});

console.log(tasks_list);

