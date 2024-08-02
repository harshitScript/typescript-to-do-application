import state from "../classes/State.js";
import TodoStatus from "../enums/TodoStatus.js";

function renderList(type: TodoStatus) {
    let list: HTMLUListElement = <HTMLUListElement>document.querySelector(`#${type === 0 ? 'active-todo-list' : 'finished-todo-list'}`)!;
    list.innerHTML = ''
    for (const todoItem of state.todoList) {
        const listItem = <HTMLLIElement>list.querySelector('li')!;
        listItem.querySelector("h2")!.innerHTML = todoItem.title
        listItem.querySelector("span")!.innerHTML = `${todoItem.date}`
        listItem.querySelector("p")!.innerHTML = todoItem.description
    }
}

export default renderList