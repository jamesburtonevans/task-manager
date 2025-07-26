import { Task } from './Task.js';
import { TaskList } from './TaskList.js';

export class TaskManager {
  tasks: Map<string, Task>;
  lists: Map<string, TaskList>;

  constructor(taskMap = new Map(), listMap = new Map()) {
    this.tasks = taskMap;
    this.lists = listMap;
  }

  // Methods for Managing Tasks //
  createTask(title: string) {
    const task = new Task(title);
    this.tasks.set(task.id, task);
    return task;
  }

  removeTask(id: string) {
    this.tasks.delete(id);
    for (const list of this.lists.values()) {
      list.removeTaskFromList(id);
    }
  }

  updateTask(id: string, updates = {}) {
    const task = this.tasks.get(id);
    if (!task) return null;

    Object.assign(task, updates);
    return task;
  }

  // Methods for Managing Lists //
  createList(title: string) {
    const list = new TaskList(title);
    this.lists.set(list.id, list);
    return list;
  }
  

  removeList(id: string) {
    this.lists.delete(id);
  }

}