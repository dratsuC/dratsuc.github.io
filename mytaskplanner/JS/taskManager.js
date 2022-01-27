'use strict';




class taskManager {
	constructor(currentId = 0) {
		this.tasks = [];
		this.currentId = currentId;
	}
	addTask(name, description, assignedTo, dueDate, status) {
		this.currentId += 1;
		this.tasks.push(name, description, assignedTo, dueDate, status);

	}

}