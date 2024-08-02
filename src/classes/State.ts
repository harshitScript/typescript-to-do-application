import TodoStatus from "../enums/TodoStatus.js";
import TodoItem from "./TodoItem.js";

class State {
    todoList: TodoItem[] = [];
    private static instance: State;
    private constructor() { }
    static getInstance() {
        if (State.instance) {
            return State.instance
        }
        return new State();
    }
    addTodo(todo: TodoItem) {
        this.todoList.push(todo);
    }
    modifyStatus(id: string) {
        this.todoList.forEach(todo => {
            if (todo.id === id) {
                todo.status = TodoStatus.FINISHED
            }
        })
    }
}
const state = State.getInstance();
export default state;