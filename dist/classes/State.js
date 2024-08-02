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
}
const state = State.getInstance();
export default state;
