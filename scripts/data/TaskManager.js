import { Task } from './Task.js';
import { TaskList } from './TaskList.js';

export class TaskManager {
  constructor(taskMap = new Map(), listMap = new Map()) {
    this.tasks = taskMap;
    this.lists = listMap;
  }

  // Methods for Managing Tasks //
  createTask(title) {
    const task = new Task(title);
    this.tasks.set(task.id, task);
    return task;
  }

  removeTask(id) {
    this.tasks.delete(id);
  }

  updateTask(id, updates = {}) {
    const task = this.tasks.get(id);
    if (!task) return null;

    Object.assign(task, updates);
    return task;
  }

  // Methods for Managing Lists //
  createList(title) {
    const list = new TaskList(title);
    this.lists.set(list.id, list);
    return list;
  }
  // method: createList //
  // method: removeList //
}