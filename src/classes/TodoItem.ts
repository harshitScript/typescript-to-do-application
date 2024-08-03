import TodoStatus from "../enums/TodoStatus"

class TodoItem {
    status: TodoStatus
    id: string;
    constructor(public title: string, public description: string, public date: Date, public color: string) {
        this.status = TodoStatus.ACTIVE
        this.id = Math.random().toString();
    }
}
export default TodoItem