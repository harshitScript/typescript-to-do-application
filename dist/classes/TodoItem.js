import TodoStatus from "../enums/TodoStatus.js";
class TodoItem {
    constructor(title, description, date, color) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.color = color;
        this.status = TodoStatus.ACTIVE;
    }
}
export default TodoItem;
