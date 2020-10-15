import { restFulMethods } from '../restful/restful.js';

export const handlerDeleteTodo = (event) => {
    const currentIdTodo = event.currentTarget.parentElement.dataset.index;
    console.log(currentIdTodo);
    restFulMethods.deleteTodo(currentIdTodo);
} 
