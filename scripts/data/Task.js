export class Task {
  constructor(title = "New Task", completed = false, id = crypto.randomUUID()) {
    this.title = title;
    this.completed = completed;
    this.id = id;
  }

}