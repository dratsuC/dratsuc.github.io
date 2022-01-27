'use strict';






// function for defining current date, 
// and appending it to '#date' HTML element

let getDate = () => {

	let d = new Date().toLocaleDateString('en-us', { 
		weekday:"long", year:"numeric", month:"short", day:"numeric"});
	d = `Today is ${d}.`
	try {
		let displayEl = document.querySelector("#date");
		displayEl.innerHTML = d;			
	} catch(error) {
		console.log(error)
	}


}


//calling date function
getDate();
