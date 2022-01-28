'use strict';

let createTaskHtml = (
	name, description,
    assignedTo, dueDate, 
    status) => {

	const html = `
    <div class="card-div">

        <div class="card layout">
            <div class="card-header rounded">

            <h5>Task Name: <small>${name}</small></h5> 
            </div>
            <div class="card-body">
            <h5 class="card-title">
                <strong>Description: </strong> <small>${description}</small>
            </h5>
            <p class="card-text">
                Assigned to: ${assignedTo}<br>
                Due Date: ${dueDate}<br>
                Status: ${status}<br>                
            </p>
            <label for="yes">  
            <input type="checkbox" value="yes" class="checkbox">      
            <a href="#" class="btn btn-light area taskDelete">Delete</a>
        </div>
    </div>
				`
	return html;
}






class taskManager {
	constructor(currentId = 0) {
		this.tasks = [];
		this.currentId = currentId;
	}
	addTask(name, description, assignedTo, status, dueDate) {
		
		const task = {
			id: this.currentId += 1,
			name: name,
			description,
			assignedTo,
			dueDate,
			status
		};
		this.tasks.push(task);

	}
	render() {
		let tasksHtmlList = [];
		for(let i = 0; i < tasks.length; i++) {
			let currentTask = tasksHtmlList[i];
			let currentDate = Date(dueDate.value);
			// let formattedDate = 

		}

	}

}