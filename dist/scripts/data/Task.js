export class Task {
    constructor(title = "New Task", completed = false) {
        this.title = title;
        this.completed = completed;
        this.id = crypto.randomUUID();
    }
}
