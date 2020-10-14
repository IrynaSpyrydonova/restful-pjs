'use strict';
const url = 'http://localhost:3000/todos';
export const restFulMethods = {
	// data access methods
	getAll: async function () {
		try {
			const res = await fetch(url);
			return await res.json();
		} catch (err) {
			console.log(err);
		}
	},

	postTodo: async function (newTodo) {
		try {
			const res = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(newTodo),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});
			return await res.json();
		} catch (err) {
			console.log(err);
		}
	},
};
