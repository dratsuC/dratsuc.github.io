'use strict';

let getDate = () => {

	let d = new Date();

	let displayEl = document.querySelector("#dateDiv");
	displayEl.innerHTML = d;	

}



export default getDate;