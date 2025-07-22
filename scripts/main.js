import { TaskManager } from './data/TaskManager.js';

const taskManager = new TaskManager();

const t1 = taskManager.createTask("Scroll reels");
const t2 = taskManager.createTask("Play Overwatch 2");
const t3 = taskManager.createTask();

console.log(Array.from(taskManager.tasks.values()).map(task => task.title));

taskManager.updateTask(t1.id, { completed: true });
console.log(Array.from(taskManager.tasks.values()).map(task => task.completed));

const l1 = taskManager.createList("Homework");
const l2 = taskManager.createList("Chores");

console.log(Array.from(taskManager.lists.values()).map(list => list.title));