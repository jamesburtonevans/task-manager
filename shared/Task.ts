export class Task {
    title: string;
    completed: boolean;
    id: string;
    
    constructor(title = "New Task", completed = false) {
        this.title = title;
        this.completed = completed;
        this.id = crypto.randomUUID();  
    }
}