import TodoStatus from "../enums/TodoStatus"

class TodoItem {
    status: TodoStatus
    constructor(public title: string, public description: string, public date: Date, public color: string) {
        this.status = TodoStatus.ACTIVE
    }
}
export default TodoItem