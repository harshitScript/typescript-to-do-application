import state from "./classes/State";
import TodoItem from "./classes/TodoItem";
import renderList from "./components/renderList";

//? Variables
const formElement = <HTMLFormElement>document.querySelector('#todo-input-form')!;
const titleInput = <HTMLInputElement>document.querySelector('#title')!
const descriptionInput = <HTMLTextAreaElement>document.querySelector('#description')!
const dateInput = <HTMLInputElement>document.querySelector('#date')!
const colorInput = <HTMLInputElement>document.querySelector('#color')!
const droppableElement = <HTMLElement>document.querySelector('#droppable-area')!

//? Event listners
function submitHandler(event: SubmitEvent): void {
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
function dragOver(e: DragEvent) {
    e.preventDefault() //? to prevent the default behaviour of not allowing dropping.
    if (e.dataTransfer && e.dataTransfer!.types[0] === 'text/plain') {
        droppableElement.classList.add('droppable');
    }
}
function dragLeave(e: DragEvent) {
    if (e.dataTransfer && e.dataTransfer!.types[0] === 'text/plain') {
        droppableElement.classList.remove('droppable');
    }
}
function drop(e: DragEvent) {
    if (e.dataTransfer && e.dataTransfer!.types[0] === 'text/plain') {
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
droppableElement.addEventListener('drop', drop)