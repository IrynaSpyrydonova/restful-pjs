
import { restFulMethods } from '../restful/restful.js';
export const handlerCheckTodo = (event) => {
    const currentIdTodo = event.target.dataset.index;
    const checkedTodo = {
              currentIdTodo,
              completed: event.target.checked
        };
        restFulMethods.patchTodo(currentIdTodo,checkedTodo);
} 