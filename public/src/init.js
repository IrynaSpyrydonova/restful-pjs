import { initialLoad } from './handlers/onload.js';
import { addTask } from './handlers/addTask.js';

// to show very first dates from database
window.addEventListener('load', initialLoad);

// add task with post method
document.getElementById('today-form').addEventListener('submit', addTask);
