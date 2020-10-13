import { app } from '../classes/app.js';
import { restFulMethods } from '../restful/restful.js';

// first instance of class
export const appInstance = new app();
export const initialLoad = () => {
	// fetch all data from data base
	restFulMethods.getAll().then((data) => {
		appInstance.setFetchedData = data;
		console.log(appInstance.state);
		// render data
		const renderedtodos = appInstance.renderTodos(appInstance.allData);
		// insert in table  element
		const tableElement = document.getElementById('placeList');
		tableElement.appendChild(renderedtodos);

		// assign last id
		appInstance.findLastId(data);
		console.log(appInstance.nexId);
	});
};
