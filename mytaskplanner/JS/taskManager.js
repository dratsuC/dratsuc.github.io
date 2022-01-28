'use strict';

let createTaskHtml = (
	name, description, assignedTo, status, dueDate
	) => {

	const html = `
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
	        <a href="#" class="btn btn-light area taskComplete">Done</a>     
	        <a href="#" class="btn btn-light area taskDelete">Delete</a>
	    </div>
				`
	return html;
}






class TaskManager {
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
		for(let i = 0; i < this.tasks.length; i++) {
			let currentTask = this.tasks[i];
			let date = new Date(this.dueDate);
			let formattedDate = 
				`${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`;
			let taskHtml = createTaskHtml(
				this.id,
				this.name,
				this.description,
				this.assignedTo,
				this.status,
				formattedDate
				);
			tasksHtmlList.push(taskHtml);
		}
		let tasksHtml = tasksHtmlList.join('\n');
		tasksList.innerHTML = tasksHtml;
	}



}