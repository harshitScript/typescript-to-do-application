import state from "../classes/State.js";
import TodoStatus from "../enums/TodoStatus.js";

function renderList(type: TodoStatus) {
    let list: HTMLUListElement = <HTMLUListElement>document.querySelector(`#${type === 0 ? 'active-todo-list' : 'finished-todo-list'}`)!;
    list.innerHTML = ''

    for (const todoItem of state.todoList) {
        function dargStart(e: DragEvent) {
            e.dataTransfer!.setData('text/plain', todoItem.id);
            e.dataTransfer!.effectAllowed = 'move';
        }
        if (todoItem.status === type) {
            const listItem = document.createElement('li');
            const h2Element = document.createElement('h2');
            const spanElement = document.createElement('span');
            const pElement = document.createElement('p');
            h2Element.innerHTML = todoItem.title;
            spanElement.innerHTML = `${todoItem.date}`;
            pElement.innerHTML = todoItem.description;
            listItem.classList.add('list-item');
            listItem.style.backgroundColor = todoItem.color;
            listItem.draggable = true;
            listItem.appendChild(h2Element);
            listItem.appendChild(spanElement);
            listItem.appendChild(pElement);
            listItem.addEventListener('dragstart', dargStart)
            list.appendChild(listItem);
        }
    }
}

export default renderList