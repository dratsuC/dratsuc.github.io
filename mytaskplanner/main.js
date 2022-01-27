'use strict';

// import default from './JS/date.js';

let getDate = () => {

	let d = new Date();

	let displayEl = document.querySelector("#dateDiv");
	displayEl.innerHTML = d;	

}



getDate();
