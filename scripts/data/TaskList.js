export class TaskList {
  constructor(title = "New Task", order = [], id = crypto.randomUUID(), sortType = 'manual') {
    this.title = title;
    this.order = order;
    this.id = id;
    this.sortType = sortType;
  }
  // Object for managing various lists of tasks //

  // Methods for Handling List Changes //
  // method: addTaskToList //
  // method: removeTaskFromList //
  // method: reorderTasksInList //
}