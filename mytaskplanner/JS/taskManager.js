'use strict';




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

}