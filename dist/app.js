import state from "./classes/State.js";
import TodoItem from "./classes/TodoItem.js";
import renderList from "./components/renderList.js";
//? Variables
const formElement = document.querySelector('#todo-input-form');
const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const dateInput = document.querySelector('#date');
const colorInput = document.querySelector('#color');
//? Event listners
function submitHandler(event) {
    console.log(event);
    event.preventDefault();
    const title = titleInput.value;
    const description = descriptionInput.value;
    const date = dateInput.value;
    const color = colorInput.value;
    const todoItem = new TodoItem(title, description, new Date(date), color);
    state.addTodo(todoItem);
    renderList(0); //? active list
}
formElement.addEventListener("submit", submitHandler);
