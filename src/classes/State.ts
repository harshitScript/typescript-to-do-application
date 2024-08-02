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
}
const state = State.getInstance();
export default state;