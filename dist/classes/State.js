import TodoStatus from "../enums/TodoStatus.js";
class State {
    constructor() {
        this.todoList = [];
    }
    static getInstance() {
        if (State.instance) {
            return State.instance;
        }
        return new State();
    }
    addTodo(todo) {
        this.todoList.push(todo);
    }
    modifyStatus(id) {
        this.todoList.forEach(todo => {
            if (todo.id === id) {
                todo.status = TodoStatus.FINISHED;
            }
        });
    }
}
const state = State.getInstance();
export default state;
