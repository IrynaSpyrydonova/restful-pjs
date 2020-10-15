import { appInstance } from '../handlers/onload.js';
import { restFulMethods } from '../restful/restful.js';

// Post Method send data to database
export const addTask = (event) => {
	// this method preventing for refresh but post method also do same
	// event.preventDefault();

	// get user input
	const userTask = event.target.input.value;
	
	// todo list as object send into database
	const newTask = {
		'todoText': userTask,
		'completed': false,
		'id': appInstance.lastId + 1,
	};
	//call post method
	restFulMethods.postTodo(newTask);
	
};
