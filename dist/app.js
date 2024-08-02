import state from "./classes/State.js";
import TodoItem from "./classes/TodoItem.js";
import renderList from "./components/renderList.js";
//? Variables
const formElement = document.querySelector('#todo-input-form');
const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const dateInput = document.querySelector('#date');
const colorInput = document.querySelector('#color');
const droppableElement = document.querySelector('#droppable-area');
//? Event listners
function submitHandler(event) {
    event.preventDefault();
    const title = titleInput.value;
    const description = descriptionInput.value;
    const date = dateInput.value;
    const color = colorInput.value;
    const todoItem = new TodoItem(title, description, new Date(date), color);
    state.addTodo(todoItem);
    renderList(0); //? active list
    renderList(1); //? finished list
    clearInput();
}
function dragOver(e) {
    e.preventDefault(); //? to prevent the default behaviour of not allowing dropping.
    if (e.dataTransfer && e.dataTransfer.types[0] === 'text/plain') {
        droppableElement.classList.add('droppable');
    }
}
function dragLeave(e) {
    if (e.dataTransfer && e.dataTransfer.types[0] === 'text/plain') {
        droppableElement.classList.remove('droppable');
    }
}
function drop(e) {
    if (e.dataTransfer && e.dataTransfer.types[0] === 'text/plain') {
        state.modifyStatus(e.dataTransfer.getData('text/plain'));
        renderList(0);
        renderList(1);
    }
}
function clearInput() {
    titleInput.value = '';
    descriptionInput.value = '';
    dateInput.value = '';
    colorInput.value = '';
}
formElement.addEventListener("submit", submitHandler);
droppableElement.addEventListener('dragover', dragOver);
droppableElement.addEventListener('dragleave', dragLeave);
droppableElement.addEventListener('drop', drop);
